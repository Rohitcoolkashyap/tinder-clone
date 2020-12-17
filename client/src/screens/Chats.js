import React from 'react';
import Chat from './Chat';
import { useHistory } from 'react-router-dom';
export default function Chats() {

  const data = [1, 2, 3, 4, 5];
  return (
    <div className="chats" >
      {data.map((i) => (
        <Chat
          key={i}
          name="perry"
          msg="hii"
          timestamp="40"
          profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG54311CHcS5H7IvPUzkhRCyHKjiAnA6fnjQ&usqp=CAU"
        />
      ))}
    </div>
  );
}
