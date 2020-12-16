import React from 'react';
import './header.scss';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export default function Header({ backButton }) {
  return (
    <div className="header">
      {backButton ? (
        <Link to="/">
          <IconButton>
            <ArrowBackIosIcon fontSize="large" className="header__icon" />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
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
