import { useState, useEffect } from 'react';
import { dbService } from 'fbase';
import Nweet from 'components/Nweet';
import NweetFactory from 'components/NweetFactory';

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);
  useEffect(() => {
    /* 실시간 데이터베이스 */
    dbService
      .collection('nweets')
      .orderBy('createAt', 'desc')
      .onSnapshot((snapshot) => {
        const newArray = snapshot.docs.map((documnet) => ({
          id: documnet.id,
          ...documnet.data(),
        }));
        setNweets(newArray);
      });
  }, []);

  return (
    <>
      <NweetFactory userObj={userObj} />
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
