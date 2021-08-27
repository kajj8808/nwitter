//Home.js 가 상위.
import { useState } from 'react';
import { dbService, storageService } from 'fbase';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const FormContainer = styled.form`
  width: 505px;
  display: flex;
  flex-direction: column;
`;

const NweetSubmitBtn = styled.input`
  background-color: #ff7979;
  padding: 10px;
  border-radius: 30px;
  &:hover {
    background-color: rgba(255, 121, 121, 0.8);
  }
`;

const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff7979;
`;

const Factory = styled.div`
  display: flex;
  gap: 12px;
  padding: 10px;
  border: 1px solid #333333;
  border-bottom: 0px;
`;

const ImagePreview = styled.img`
  width: 505px;
  height: 285px;
  border-radius: 13px;
  object-fit: cover;
  object-position: center top;
`;

const FactoryFooter = styled.div`
  width: 505px;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PreviewContainer = styled.div`
  margin-top: 40px;
  position: relative;
`;

const ImageCloseBtn = styled.button`
  position: absolute;
  left: 5px;
  top: 5px;
  border: none;
  padding: 8px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const AttachLabel = styled.label`
  display: flex;
  gap: 3px;
  color : #ff7979;
`;

const ImageInput = styled.input`
  width: 0;
  height: 0;
`;

const NweetFactory = ({ userObj }) => {
  /* 게시글 */
  const [nweet, setNweet] = useState('');
  /* (첨부파일) image */
  const [attachment, setAttachment] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    if (nweet === '') {
      return;
    }
    let attachmentUrl = '';
    if (attachment !== '') {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, 'data_url');
      attachmentUrl = await response.ref.getDownloadURL();
    }

    const nweetObj = {
      text: nweet,
      createAt: Date.now(),
      // 만든 유저 id
      creatorId: userObj.uid,
      creatorName: userObj.displayName,
      attachmentUrl,
    };
    await dbService.collection('nweets').add(nweetObj);

    setNweet('');
    setAttachment('');
  };

  const onChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setNweet(value);
  };

  const onFileChange = (event) => {
    const { files } = event.target;
    const theFile = files[0];
    /* broser api? */
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const { result } = finishedEvent.currentTarget;
      setAttachment(result);
    };
    if (Boolean(theFile)) {
      reader.readAsDataURL(theFile);
    }
  };

  /* 실시간 데이터 베이스 사용을위해 주석처리. */
  /*  const getNweets = async () => {
    const dbNweets = await dbService.collection('nweets').get();
    dbNweets.forEach((documnet) => {
      //update / delte 를위해 id 를 추가하는 부분. 
      const nweetObject = { ...documnet.data(), id: documnet.id };
      setNweets((prev) => [nweetObject, ...prev]);
    });
  }; */
  const onClaerAttachment = () => setAttachment('');
  return (
    <Factory>
      <Profile></Profile>
      <FormContainer onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        ></input>
        {attachment && (
          <PreviewContainer>
            <ImagePreview src={attachment} />
            <ImageCloseBtn onClick={onClaerAttachment}>
              <FontAwesomeIcon icon={faTimes} color="white" />
            </ImageCloseBtn>
          </PreviewContainer>
        )}
        <FactoryFooter>
          <AttachLabel htmlFor="attach-file">
            <span>Add Photos</span>
            <FontAwesomeIcon icon={faPlus} />
          </AttachLabel>
          <ImageInput
            id="attach-file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
          <NweetSubmitBtn type="submit" value="Nweet" />
        </FactoryFooter>
      </FormContainer>
    </Factory>
  );
};

export default NweetFactory;
