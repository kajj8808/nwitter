import { dbService, storageService } from "fbase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  faTrash,
  faPencilAlt,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const fontSize = 18;

const NweetContainer = styled.div`
  display: flex;
  padding: 12px;
  border: 1px solid #333333;
  gap: 13px;
  border-top: 0px;
`;

const AttachmentBox = styled.img`
  width: 505px;
  height: 285px;
  border-radius: 13px;
  object-fit: cover;
  object-position: center top;
  margin-top: 10px;
`;

const NweetBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const EditBtns = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 5px;
  right: 0;
  top: 0px;
  background-color: black;
  box-shadow: white 0px 1px 3px 1px;
  border-radius: 8px;
  z-index: 2;
`;

const TextSpan = styled.span`
  white-space: normal;
  word-break: break-all;
  font-size: ${fontSize}px;
`;

const Profile = styled.div`
  width: 56px;
  height: 50px;
  border-radius: 50%;
  background-color: #3ea6ff;
`;

const Header = styled.div`
  width: 505px;
  position: relative;
`;

const Description = styled.div`
  /* overflow 를 ... 으로 하기위해. */
  width: 430px;
  display: flex;
  gap: 5px;
`;

const Main = styled.div`
  position: relative;
  width: 505px;
`;

const CreatorUser = styled.h2`
  font-weight: 600;
`;

const LightlyText = styled.h4`
  color: rgba(255, 255, 255, 0.5);
`;

const EditBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: black;
  border: none;
  color: #ffff;
  border-radius: 50%;
  &:hover {
    background-color: rgba(255, 121, 121, 0.1);
    color: #fa7b79;
  }
`;

const EditSpan = styled.span`
  text-align: center;
  writing-mode: tb-rl;
  font-size: 50px;
  font-weight: 600;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const UpdateBtn = styled.input`
  background-color: #3ea6ff;
  padding: 10px;
  border-radius: 30px;
  text-align: center;
`;

const CloseBtn = styled.button`
  background-color: #3ea6ff;
  padding: 10px;
  border: none;
  color: #ffff;
  border-radius: 30px;
`;

const EditInput = styled.input`
  border: 4px dotted #bcbcbc;
  padding: 10px;
`;

const NweetEditBtn = styled.button`
  color: #ffff;
  background-color: black;
  border: none;
  display: flex;
  gap: 10px;
  padding: 10px;
  border-radius: 30px;
`;

const Nweet = ({ nweetObj, isOwer }) => {
  /* edit 하는 상태. 토글 관리. */
  const [editing, setEditing] = useState(false);
  /* 새로운 nweet(수정) obj.text 를 가져와서 기존 트윗이 보이도록 초기값. */
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const [editToggle, setEditToggle] = useState(false);

  const toggleEditing = () => {
    setEditing((prev) => !prev);
    setEditToggle(false);
  };

  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      /* docmnet id 값을 찾아서 삭제합니다. */
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      if (nweetObj.attchmentUrl !== "") {
        await storageService.refFromURL(nweetObj.attchmentUrl).delete();
      }
    }
  };

  const onChange = (event) => {
    const { value } = event.target;
    setNewNweet(value);
  };

  const onSubmit = async (event) => {
    //event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({ text: newNweet });
  };

  const onEditBtn = () => {
    setEditToggle((prev) => !prev);
  };

  const getTime = (createdAt) => {
    const nowTime = new Date();
    const createdTime = new Date(createdAt);
    let result = "";
    // 만든날짜 계산
    if (nowTime.getFullYear() !== createdTime.getFullYear()) {
      //년
      result = `${nowTime.getFullYear() - createdTime.getFullYear()}년`;
    } else if (nowTime.getMonth() !== createdTime.getMonth()) {
      //월
      result = `${nowTime.getMonth() - createdTime.getMonth()}월`;
    } else if (nowTime.getDay() !== createdTime.getDay()) {
      //일
      result = `${nowTime.getDay() - createdTime.getDay()}일`;
    } else if (nowTime.getHours() !== createdTime.getHours()) {
      //시
      result = `${nowTime.getHours() - createdTime.getHours()}시`;
    } else if (nowTime.getMinutes() !== createdTime.getMinutes()) {
      //분
      result = `${nowTime.getMinutes() - createdTime.getMinutes()}분`;
    } else {
      //초
      result = `${nowTime.getSeconds() - createdTime.getSeconds()}초`;
    }
    return result;
  };

  return (
    <div key={nweetObj.id}>
      {editing ? (
        <NweetContainer>
          <EditSpan>EDIT</EditSpan>
          <NweetBox>
            <EditForm onSubmit={onSubmit}>
              <EditInput onChange={onChange} value={newNweet} required />
              {nweetObj.attachmentUrl && (
                <AttachmentBox src={nweetObj.attachmentUrl}></AttachmentBox>
              )}
              <UpdateBtn type="submit" value="Update Nweet" />
            </EditForm>
            <CloseBtn onClick={toggleEditing}>Cancel</CloseBtn>
          </NweetBox>
        </NweetContainer>
      ) : (
        <>
          <NweetContainer>
            <Profile />
            <NweetBox>
              <Header>
                <Description>
                  <CreatorUser>{nweetObj.creatorName}</CreatorUser>
                  <LightlyText>@{nweetObj.creatorId}</LightlyText>
                  <LightlyText>·</LightlyText>
                  <LightlyText>{getTime(nweetObj.createAt)}</LightlyText>
                </Description>
                {isOwer && (
                  <EditBtn onClick={onEditBtn}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </EditBtn>
                )}
              </Header>
              <Main>
                <TextSpan>{nweetObj.text}</TextSpan>
                {isOwer && editToggle && (
                  <EditBtns>
                    <NweetEditBtn onClick={onDeleteClick}>
                      <FontAwesomeIcon icon={faTrash} />
                      <span>Delete Nweet</span>
                    </NweetEditBtn>
                    <NweetEditBtn onClick={toggleEditing}>
                      <FontAwesomeIcon icon={faPencilAlt} />
                      <span>Update Nweet</span>
                    </NweetEditBtn>
                  </EditBtns>
                )}
              </Main>
              {nweetObj.attachmentUrl && (
                <Link>
                  <AttachmentBox src={nweetObj.attachmentUrl}></AttachmentBox>
                </Link>
              )}
            </NweetBox>
          </NweetContainer>
        </>
      )}
    </div>
  );
};

export default Nweet;
