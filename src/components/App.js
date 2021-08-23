import AppRouter from 'components/Router';
import { useEffect, useState } from 'react';
import { authService } from 'fbase';

function App() {
  /* 로그인 되있는상태 이라면 홈페이지로 넘겨주기위해서 사용합니다.(자동로그인?) */
  const [init, setInit] = useState(false);
  /* loogin 햇는지를 알기위해 사용합니다. */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* user 이름을 얻기위해 사용합니다. */
  const [userObject, setUserObject] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObject(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObject} />
      ) : (
        'initializing...'
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
