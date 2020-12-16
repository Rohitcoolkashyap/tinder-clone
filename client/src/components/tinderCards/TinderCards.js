import React from 'react';
import { useState } from 'react';
import './tinderCards.scss';
import TinderCard from 'react-tinder-card';
import axios from '../../axios';
import { useEffect } from 'react';
export default function TinderCards() {
  console.log(axios.defaults.baseUrl);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(`${axios.defaults.baseUrl}/tinder/cards`);
      setPeople(req.data);
    }
    fetchData();
  }, []);
  console.log(people);
  const swiped = (direction, nameToDelete) => {
    console.log(nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log('left the screen', name);
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
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
      </div>
    </div>
  );
}
