import React from 'react';
import './User.css';

export function User({ name, userID, login, bio, avatar_url }) {
  if (name === '') {
    return;
  }
  return (
    <div className="container">
      <p>
        The user {name} has username {login} and id: {userID}.
      </p>
      <p>
        {login}'s Bio is: {bio === null ? 'empty' : bio}
      </p>
      <img src={avatar_url} alt="perfil no GitHub" />
    </div>
  );
}
