import React from 'react';
import './chat.scss';
import Avatar from '@material-ui/core/Avatar';
export default function Chat({ name, msg, profile, timestamp }) {
  return (
    <div className="chat">
      <Avatar className="chat__img" alt={name} src={profile}></Avatar>

      <div className="chat__details">
        <h2>{name}</h2>
        <p>{msg}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </div>
  );
}
