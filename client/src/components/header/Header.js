import React from 'react';
import './header.scss';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { Avatar, IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useStateValue } from '../../StateProvider';
export default function Header({ backButton }) {
  var dataImage = localStorage.getItem('imgData');
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <Link to="/profile">
          <IconButton>
            <Avatar
              src={dataImage ? dataImage : ''}
              alt=""
              className="header__icon"
            />
          </IconButton>
        </Link>
      )}

      <Link to="/">
        <img src="tinder-logo.png" className="header__logo" alt="" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}
