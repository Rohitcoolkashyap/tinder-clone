import React from 'react';
import Header from '../components/header/Header';
import SwipeButtons from '../components/swipeButtons/SwipeButtons';
import TinderCards from '../components/tinderCards/TinderCards';

export default function Homepage() {
  return (
    <>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </>
  );
}
