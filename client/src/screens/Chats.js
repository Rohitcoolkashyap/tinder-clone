import React, { useEffect } from 'react';
import Chat from './Chat';
import { useState } from 'react';
import db from '../firebase';
export default function Chats() {
  const [matchUsers, setMatchUsers] = useState([]);
  const heading = {
    textAlign: 'center',
  };
  useEffect(() => {
    db.collection('matchedUser').onSnapshot((snapshot) =>
      setMatchUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          timestamp: doc.data().timestamp,
          userImage: doc.data().userImage,
          message: doc.data().message,
        })),
      ),
    );
  }, []);
  return (
    <div className="chats">
      <h1 style={heading} className="chats__heading">
        Your matching
      </h1>
      {matchUsers.map((user) => (
        <Chat
          key={user.id}
          id={user.id}
          name={user.name}
          msg={user.message}
          timestamp={user.timestamp}
          profile={user.userImage}
        />
      ))}
    </div>
  );
}
