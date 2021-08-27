import { useState, useEffect } from 'react';
import { authService, dbService } from 'fbase';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 505px;
`;

const Radius = styled.div`
  width: 100%;
  background-color: #ff7979;
  padding: 10px;
  border-radius: 30px;
  text-align: center;
  color: white;
  &:hover {
    background-color: rgba(255, 121, 121, 0.8);
  }
`;

const ChangeNameInput = styled.input`
  width: 100%;
  border: none;
  background-color: #ffff;
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 10px;
`;
const ChangeNameForm = styled.form`
  margin-bottom: 30px;
`;

const Line = styled.hr`
  width: 100%;
  background-color: black;
  border-top: 1px solid #bbb;
  border-bottom: 0px;
  margin-bottom: 60px;
`;

const LogoutBtn = styled.button`
  background-color: transparent;
  color: #ffff;
  border: none;
  font-size: 15px;
`;

const Profile = ({ userObj, refreshUser }) => {
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

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
      // update 를 한후 실시간으로 데이터를 받기위해 사용.!
      refreshUser();
    }
  };

  return (
    <ProfileContainer>
      <ChangeNameForm onSubmit={onSubmit}>
        <ChangeNameInput
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <Radius>
          <input type="submit" value="Update Profile" />
        </Radius>
      </ChangeNameForm>
      <Line />
      <Radius>
        <LogoutBtn onClick={onLogOutClick}>Log Out</LogoutBtn>
      </Radius>
    </ProfileContainer>
  );
};

export default Profile;
