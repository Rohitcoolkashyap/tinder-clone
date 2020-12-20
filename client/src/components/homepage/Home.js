import { Button } from '@material-ui/core';
import React from 'react';
import './home.scss';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import Cookie from 'js-cookie';

export default function Home() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        Cookie.set('userInfo', JSON.stringify(result.credential.accessToken));
        localStorage.setItem('imgData', result.user.photoURL);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.error(error));
  };
  const a = 'caleb-ekeroth-wSBQFWF77lI-unsplash.jpg';
  const b = 'alexander-popov-H-FjwCHavfo-unsplash.jpg';
  const c = 'w.jpg';
  const d = 'roger-keller-yWqK0KsNTXQ-unsplash.jpg';
  const e = 'tekang-15uadDpdo24-unsplash.jpg';
  var sectionStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${c}) `,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  };
  return (
    <div className="home" style={sectionStyle}>
      <div className="home__top">
        <div className="top__left">
          <img src="tinder-logo.png" alt="" />
          <h1>tinder</h1>
        </div>

        <Button
          onClick={signIn}
          className="home__button"
          size="large"
          variant="contained"
          color="secondary"
        >
          log in
        </Button>
      </div>
      <div className="home__center">
        <h2 className="tagline">Start something epic</h2>

        <Button
          onClick={signIn}
          className="center__button"
          size="large"
          variant="contained"
          color="secondary"
        >
          sign up with google
        </Button>
      </div>
    </div>
  );
}
