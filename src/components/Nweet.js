import { dbService, storageService } from 'fbase';
import { useState } from 'react';
import styled from 'styled-components';

const NweetContainer = styled.div`
  padding: 15px;
`;

const AttachmentBox = styled.div`
  width: 505px;
  height: 285px;
  background: url(${(props) => props.bcImage});
  background-size: cover;
  background-position: center top;
  border-radius: 13px;
`;

const Header = styled.div`
  width: 350px;
  display: flex;
  gap: 5px;
`;

const Nweet = ({ nweetObj, isOwer }) => {
  /* edit 하는 상태. 토글 관리. */
  const [editing, setEditing] = useState(false);
  /* 새로운 nweet(수정) obj.text 를 가져와서 기존 트윗이 보이도록 초기값. */
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const toggleEditing = () => setEditing((prev) => !prev);

  const onDeleteClick = async () => {
    const ok = window.confirm('삭제하시겠습니까?');
    if (ok) {
      /* docmnet id 값을 찾아서 삭제합니다. */
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      if (nweetObj.attchmentUrl !== '') {
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

  const getTime = (createdAt) => {
    const nowTime = new Date();
    const createdTime = new Date(createdAt);
    let result = '';
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
        <>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} value={newNweet} required />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <NweetContainer>
          <Header>
            <h4>{nweetObj.text}</h4>
            <h5>· {getTime(nweetObj.createAt)}</h5>
          </Header>

          {nweetObj.attachmentUrl && (
            <AttachmentBox bcImage={nweetObj.attachmentUrl}></AttachmentBox>
          )}
          {isOwer && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Update Nweet</button>
            </>
          )}
        </NweetContainer>
      )}
    </div>
  );
};

export default Nweet;
