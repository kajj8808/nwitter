import { useState } from 'react';
import { dbService , storageService } from 'fbase';
import { v4 as uuidv4 } from 'uuid';

const NweetFactory = ({userObj}) => {
  /* 게시글 */
  const [nweet, setNweet] = useState('');
  /* (첨부파일) image */
  const [attachment, setAttachment] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
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
    reader.readAsDataURL(theFile);
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
    <form onSubmit={onSubmit}>
      <input
        value={nweet}
        onChange={onChange}
        type="text"
        placeholder="What's on your mind?"
        maxLength={120}
      ></input>
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Nweet" />
      {attachment && (
        <div>
          <img src={attachment} width="50px" height="50px" />
          <button onClick={onClaerAttachment}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default NweetFactory;
