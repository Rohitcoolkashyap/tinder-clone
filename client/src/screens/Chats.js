import React, { useEffect } from 'react';
import Chat from './Chat';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import db from '../firebase';
export default function Chats() {
  const data = [1, 2, 3, 4, 5];
  const [matchUsers, setMatchUsers] = useState([]);

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
  // console.log(matchUsers);
  return (
    <div className="chats">
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
