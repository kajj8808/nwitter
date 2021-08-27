import { authService } from 'fbase';
import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;
`;

const InputBox = styled.input`
  background-color: ${(props) => (props.inputType ? '#ff7979' : 'white')};
  border-radius: 30px;
  color: ${(props) => (props.inputType ? '#ffff' : 'black')};
  text-align: ${(props) => (props.inputType ? 'center' : '')};
  &:hover {
    background-color: ${(props) =>
      props.inputType ? 'rgba(255,121,121,0.9)' : 'white'};
  }
  padding: 10px;
`;

const ToggleBtn = styled.div`
  text-align: center;
  text-decoration: underline;
`;

const AuthForm = () => {
  /* 쓰는 state 들  */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');

  //input 입력을위해서.
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  //authService 로 데이터전송.
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        //create new Account
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        //log in
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  //로그인 / 만들기 를 바꿈.
  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <FormContainer onSubmit={onSubmit}>
        <InputBox
          name="email"
          type="email"
          placeholder="Eamil"
          required
          value={email}
          onChange={onChange}
        />
        <InputBox
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <InputBox
          type="submit"
          value={newAccount ? 'Create Account' : 'Log In'}
          inputType={'submit'}
        />
        <br />
        {error}
      </FormContainer>
      <ToggleBtn onClick={toggleAccount}>
        {newAccount ? 'Sign In' : 'Create Account'}
      </ToggleBtn>
    </div>
  );
};

export default AuthForm;
