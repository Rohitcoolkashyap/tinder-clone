import React from 'react';
import Chat from './Chat';

export default function Chats() {
  return (
    <div className="chats">
      <Chat
        name="dd"
        msg="whats"
        timestamp="40"
        profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG54311CHcS5H7IvPUzkhRCyHKjiAnA6fnjQ&usqp=CAU"
      />
      <Chat
        name="dd"
        msg="whats"
        timestamp="40"
        profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG54311CHcS5H7IvPUzkhRCyHKjiAnA6fnjQ&usqp=CAU"
      />
      <Chat name="dd" msg="whats" timestamp="40" profile="" />
    </div>
  );
}
