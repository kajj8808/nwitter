import { dbService } from 'fbase';

const Nweet = ({ nweetObj, isOwer }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm('삭제하시겠습니까?');
    if(ok){
      /* docmnet id 값을 찾아서 삭제합니다. */
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
  };
  return (
    <div key={nweetObj.id}>
      <h4> {nweetObj.text}</h4>
      <h5> {nweetObj.createAt}</h5>
      {isOwer && (
        <>
          <button onClick={onDeleteClick}>Delete Nweet</button>
          <button>Update Nweet</button>
        </>
      )}
    </div>
  );
};

export default Nweet;
