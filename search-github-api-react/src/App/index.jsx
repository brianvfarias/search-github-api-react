import { useState } from 'react';
import { User } from '../components/User';

export function App() {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    id: '',
    login: '',
    bio: '',
    avatar_url: ''
  });

  async function searchUser() {
    const { name, login, id, bio, avatar_url } = await fetch(
      `https://api.github.com/users/${user === '' ? 'brianvfarias' : user}`
    )
      .then(res => res.json())
      .then(data => data);
    setUserData({
      name: name,
      id: id,
      login: login,
      bio: bio,
      avatar_url: avatar_url
    });
    usernameInput.value = '';
    setUser('');
  }

  return (
    <div>
      <h1>Insert the username you want to search from Github</h1>
      <label htmlFor="usernameInput">Search user</label>
      <input
        type="text"
        placeholder="insert username"
        id="usernameInput"
        onChange={e => setUser(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            searchUser();
          }
        }}
      />
      <button onClick={searchUser}>Search</button>
      <User
        name={userData.name}
        userID={userData.id}
        login={userData.login}
        bio={userData.bio}
        avatar_url={userData.avatar_url}
      />
    </div>
  );
}
