import { Avatar } from '@material-ui/core';
import React, { useEffect } from 'react';
import './chatscreen.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import firebase from 'firebase';

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const { personId } = useParams();
  useEffect(() => {
    // if (personId) {
    //   db.collection('matchedUser')
    //     .doc(personId)
    //     .onSnapshot((snapshot) => setMessages(snapshot.data()));
    // }
    if (personId) {
      db.collection('matchedUser')
        .doc(personId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data())),
        );
    }
  }, [personId]);
  const handleInput = (e) => {
    e.preventDefault();
    if (personId) {
      db.collection('matchedUser').doc(personId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    // setMessages([...messages, { msg: input }]);
    setInput('');
  };
  return (
    <div className="chatscreen">
      <p className="chatscreen__timestamp">you matched with miley on 1/14/99</p>
      {messages.map((msg) =>
        msg.name ? (
          <div className="chatscreen__message" key={msg.id}>
            <Avatar
              className="chatscreen__profile"
              alt={msg.name}
              src={msg.userImage}
            />
            <p className="chatscreen__text">{msg.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textUser">{msg.message}</p>
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
