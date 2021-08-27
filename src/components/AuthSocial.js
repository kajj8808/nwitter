import { authService, firebaseInstance } from 'fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const SocialBtn = styled.button`
  background-color: white;
  border: none;
  border-radius: 30px;
  padding: 12px;
  &:hover{
    background-color: rgba(255,255,255,0.9);
  }
`;

const SocialContainer = styled.div`
  width: 350px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  
`;

const Social = () => {
  const onSocialClick = async (event) => {
    const { name } = event.target;
    let provider;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <SocialContainer>
      <SocialBtn onClick={onSocialClick} name="google">
        Continue with Google <FontAwesomeIcon icon={faGoogle} />
      </SocialBtn>
      <SocialBtn onClick={onSocialClick} name="github">
        Continue with Github <FontAwesomeIcon icon={faGithub} />
      </SocialBtn>
    </SocialContainer>
  );
};

export default Social;
