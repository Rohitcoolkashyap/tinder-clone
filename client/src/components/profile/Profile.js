import React from 'react';
import './profile.scss';
import { Button } from '@material-ui/core';
import Cookie from 'js-cookie';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem('userData'));
  const gender = localStorage.getItem('gender');
  const phoneNumber = localStorage.getItem('phoneNumber');

  const handleLogout = () => {
    Cookie.remove('userInfo');
    localStorage.clear();
    history.push('/');
    window.location.reload();
  };
  return (
    <div className="profile">
      <div className="profile__left">
        <div className="left__advertisement">
          <div className="advertisement1">
            <img src="logo2.svg" alt="" />
            <p>Unlock our most exclusive features</p>
          </div>
          <div className="advertisement1 ad2">
            <img src="logo1.svg" alt="" />
            <p>Unlimited Likes & more!</p>
          </div>
        </div>
        <div className="left__name">
          <label>Name</label>
          <p>{userData.name}</p>
        </div>
        <div className="left__name">
          <label>Phone number</label>
          <p>{phoneNumber}</p>
        </div>
        <div className="left__name">
          <label>Email</label>
          <p>{userData.email}</p>
        </div>
        <div className="left__name">
          <label>Gender</label>
          <p>{gender.startsWith('m') ? 'female' : 'male'}</p>
        </div>
        <div className="left__name">
          <label>Interested In</label>
          <p> {gender}</p>
        </div>
        <div className="logout">
          <Button
            onClick={handleLogout}
            size="large"
            variant="contained"
            color="secondary"
          >
            logout
          </Button>
        </div>
      </div>
      <div className="profile__right">
        <img src={userData.picture} alt="" />
        <h1>{userData.name}</h1>
      </div>
    </div>
  );
}
