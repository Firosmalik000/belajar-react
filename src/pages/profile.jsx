import { useLogin } from '../hooks/useLogin';

export const ProfilePage = () => {
  // customHooks
  const username = useLogin();
  return (
    <>
      <h1>profile</h1>
      username : {username}
    </>
  );
};
