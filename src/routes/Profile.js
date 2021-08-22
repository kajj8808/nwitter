import { authService } from 'fbase';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    /* home 으로 이동 history 는 push 방식으로 동작. */
    history.push('/');
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
