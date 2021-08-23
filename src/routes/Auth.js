import { useState } from 'react';
import { authService , firebaseInstance } from 'fbase';
//import styled from 'styled-components';

const Auth = () => {
  /* react hook  */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error , setError] = useState('');

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

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

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialClick = async (event) => {
    const {name} = event.target;
    let provider;
    if(name === 'google'){
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }else if(name === 'github'){
      provider = new firebaseInstance.auth.GithubAuthProvider();    
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Eamil"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? 'Create Account' : 'Log In'} />
        <br />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount  ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button onClick={onSocialClick} name = "google">Continue with Google </button>
        <button onClick={onSocialClick} name = "github">Continue with Github </button>
      </div>
    </div>
  );
};

export default Auth;
