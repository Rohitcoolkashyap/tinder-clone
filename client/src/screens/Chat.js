import React from 'react';
import './chat.scss';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';
export default function Chat({ name, msg, profile, timestamp, id }) {
  const history = useHistory();

  return (
    <div className="chat" onClick={() => history.push(`/chat/${id}`)}>
      <Avatar className="chat__img" alt={name} src={profile}></Avatar>

      <div className="chat__details">
        <h2>{name}</h2>
        <p>{msg}</p>
      </div>
      <p className="chat__timestamp">
        {new Date(timestamp?.toDate()).toUTCString()}
      </p>
    </div>
  );
}
