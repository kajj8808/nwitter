import AppRouter from 'components/Router';
import { useEffect, useState } from 'react';
import { authService } from 'fbase';
import GlobalStyles from 'components/GlobalStyles';

function App() {
  /* 로그인 되있는상태 이라면 홈페이지로 넘겨주기위해서 사용합니다.(자동로그인?) */
  const [init, setInit] = useState(false);
  /* loogin 햇는지를 알고 user 를얻기위해 사용합니다. */
  const [userObject, setUserObject] = useState(null);
  // user data를 새로고침 해서 실시간데이터를 받기위해 사용.
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObject({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObject({
          uid: user.id,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        //login 햇는지 안햇는지를 확인함.
        setUserObject(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObject)}
          userObj={userObject}
        />
      ) : (
        'initializing...'
      )}
    </>
  );
}

export default App;
