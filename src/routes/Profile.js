import { useState, useEffect } from 'react';
import { authService, dbService } from 'fbase';
import { useHistory } from 'react-router-dom';
import Nweet from 'components/Nweet';

const Profile = ({ userObj , refreshUser}) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    /* home 으로 이동 history 는 push 방식으로 동작. */
    history.push('/');
  };

  const onChange = (event) => {
    const { value } = event.target;
    setNewDisplayName(value);
  };
  
  const onSubmit = async (event) =>{
    event.preventDefault();
    if(userObj.displayName !== newDisplayName){
      await userObj.updateProfile({displayName : newDisplayName});
      // update 를 한후 실시간으로 데이터를 받기위해 사용.!
      refreshUser();
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
