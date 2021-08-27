import AuthForm from 'components/AuthForm';
import AuthSocial from 'components/AuthSocial';
//import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display : flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 50px;
`;

const Auth = () => {
  return (
    <AuthContainer>
      <FontAwesomeIcon
        icon={faTwitter}
        color={'#ff7979'}
        size="3x"
        style={{ marginBottom: '20px' }}
      />
      <AuthForm />
      <AuthSocial />
    </AuthContainer>
  );
};

export default Auth;
