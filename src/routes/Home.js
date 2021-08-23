import { useState, useEffect } from 'react';
import { dbService } from 'fbase';
import Nweet from 'components/Nweet';

const Home = ({ userObj }) => {
  /* 게시글 */
  const [nweet, setNweet] = useState('');
  const [nweets, setNweets] = useState([]);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection('nweets').add({
      text: nweet,
      createAt: Date.now(),
      /* 만든 유저 id */
      creatorId: userObj.uid,
    });
    setNweet('');
  };

  const onChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setNweet(value);
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

  useEffect(() => {
    /* 실시간 데이터베이스 */
    dbService.collection('nweets').onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((documnet) => ({
        id: documnet.id,
        ...documnet.data(),
      }));
      setNweets(newArray);
    });
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        ></input>
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwer={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
