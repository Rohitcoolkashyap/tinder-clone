import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import React from 'react';
import './login.css';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import Cookie from 'js-cookie';

export default function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        Cookie.set('userInfo', JSON.stringify(result.credential.accessToken));

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif"
          alt=""
        />
        <h1>Sign in to Rohit chat app</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}
