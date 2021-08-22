import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Auth from 'routes/Auth';
import Profile from 'routes/Profile';
import Navigation from './Navigation';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      {/* Switch => Route 중 하나만 렌더링하게. */}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
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
