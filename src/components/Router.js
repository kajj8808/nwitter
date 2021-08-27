import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Auth from 'routes/Auth';
import Profile from 'routes/Profile';
import Navigation from './Navigation';
import styled from 'styled-components';

const RouteContainer = styled.div`
  max-width: 890px;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      {/* Switch => Route 중 하나만 렌더링하게. */}
      <Switch>
        {isLoggedIn ? (
          <RouteContainer>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </RouteContainer>
        ) : (
          <Route path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
