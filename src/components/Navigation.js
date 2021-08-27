import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
`;

const ProfileLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  gap: 10px;
  color: #ffff;
`

const Navigation = ({ userObj }) => {
  return (
    <nav>
      <NavList>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faTwitter} color={'#ff7979'} size="2x" />
          </Link>
        </li>
        <li>
          <ProfileLink to="/profile">
            <FontAwesomeIcon icon={faUser} color={'#ff7979'} size="2x" />
            <span>
              {userObj.displayName
                ? `${userObj.displayName}의 Profile`
                : 'Profile'}
            </span>
          </ProfileLink>
        </li>
      </NavList>
    </nav>
  );
};

export default Navigation;
