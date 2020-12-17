import { Avatar } from '@material-ui/core';
import React from 'react';
import './chatscreen.scss';
import { useState } from 'react';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: 'rohit',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG54311CHcS5H7IvPUzkhRCyHKjiAnA6fnjQ&usqp=CAU',
      msg: 'hello bro',
    },
    {
      name: 'rohit',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG54311CHcS5H7IvPUzkhRCyHKjiAnA6fnjQ&usqp=CAU',
      msg: 'hello bro',
    },
    {
      name: 'rohit',
      img: '',
      msg: 'hey are you fine',
    },
  ]);
  return (
    <div className="chatscreen">
      <p className='chatscreen__timestamp'>you matched with miley on 1/14/99</p>
      {messages.map((msg) => (
        <div className="chatscreen__message">
          <Avatar
            className="chatscreen__profile"
            alt={msg.name}
            src={msg.img}
          />
          <p className="chatscreen__text">{msg.msg}</p>
        </div>
      ))}
    </div>
  );
}
