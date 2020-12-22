import React from 'react';
import './GenderForm.scss';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
export default function GenderForm() {
  const history = useHistory();

  const handleMale = (event) => {
    localStorage.setItem('gender', 'male');
    history.push('/');
    window.location.reload();
  };
  const handleFemale = (event) => {
    localStorage.setItem('gender', 'female');
    history.push('/');
    window.location.reload();
  };
  const handleOthers = (event) => {
    localStorage.setItem('gender', 'others');
    history.push('/');
    window.location.reload();
  };
  return (
    <div className="genderForm">
      <h1 className='genderForm__title'>Interested in</h1>

      <div className="genderForm__box">
        <Button onClick={handleMale} variant="contained" color="secondary">
          Male
        </Button>
        <Button onClick={handleFemale} variant="contained" color="primary">
          Female
        </Button>
        <Button onClick={handleOthers} variant="contained">
          others
        </Button>
      </div>
    </div>
  );
}
