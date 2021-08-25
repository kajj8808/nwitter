import { authService, firebaseInstance } from 'fbase';

const SocialContainer = () => {
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
    <div>
      <button onClick={onSocialClick} name="google">
        Continue with Google{' '}
      </button>
      <button onClick={onSocialClick} name="github">
        Continue with Github{' '}
      </button>
    </div>
  );
};

export default SocialContainer;
