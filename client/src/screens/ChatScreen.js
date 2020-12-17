import { Avatar } from '@material-ui/core';
import React from 'react';
import './chatscreen.scss';
import { useState } from 'react';

export default function ChatScreen() {
  const [input, setInput] = useState('');
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
      msg: "hello how's going",
    },
  ]);
  const handleInput = (e) => {
    e.preventDefault();
    setMessages([...messages, { msg: input }]);
    setInput('');
  };
  return (
    <div className="chatscreen">
      <p className="chatscreen__timestamp">you matched with miley on 1/14/99</p>
      {messages.map((msg) =>
        msg.name ? (
          <div className="chatscreen__message">
            <Avatar
              className="chatscreen__profile"
              alt={msg.name}
              src={msg.img}
            />
            <p className="chatscreen__text">{msg.msg}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textUser">{msg.msg}</p>
          </div>
        ),
      )}
      <form className="chatscreen__form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatscreen__input"
          type="text"
          placeholder="enter text here!"
        />
        <button
          onClick={handleInput}
          type="submit"
          className="chatscreen__button"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
