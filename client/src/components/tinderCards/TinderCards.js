import React from 'react';
import { useState } from 'react';
import './tinderCards.scss';
import TinderCard from 'react-tinder-card';
import axios from '../../axios';
import { useEffect } from 'react';
import SwipeButtons from '../swipeButtons/SwipeButtons';
export default function TinderCards() {
  const [people, setPeople] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(`${axios.defaults.baseUrl}/tinder/cards`);
      const array = req.data;
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      setPeople(req.data);
    }
    fetchData();
  }, [refresh]);

  const refreshFunc = () => {
    console.log('call')
    setRefresh(!refresh);
  };
  const swiped = (direction, nameToDelete) => {
    // console.log(nameToDelete);
  };
  const outOfFrame = (name) => {
    // console.log('left the screen', name);
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((character) => (
          <TinderCard
            className="swipe"
            key={character._id}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: `url(${character.imgUrl})` }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
        <SwipeButtons callRefresh={refreshFunc} />
      </div>
    </div>
  );
}
