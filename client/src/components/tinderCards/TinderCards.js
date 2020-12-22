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
  const [swipe, setSwipe] = useState(false);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const gender = localStorage.getItem('gender');

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        `${axios.defaults.baseUrl}/tinder/cards/${gender}`,
      );
      const array = req.data;
      if (array.length !== 0) setLoading(false);

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
    setRefresh(!refresh);
  };
  const swiped = (direction, nameToDelete) => {
    setText(direction === 'right' ? 'like' : 'nope');
    setSwipe(true);
  };
  const outOfFrame = (name) => {
    // console.log('left the screen', name);
    setSwipe(false);
  };

  return (
    <div className="tinderCards">
      {loading ? (
        <div className="tinderCards__loading">
          <img src="source1.gif" alt="" />
        </div>
      ) : (
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

              {people.length === 0 && (
                <div className="tinderCards__loading">
                  <img src="source1.gif" alt="" />
                </div>
              )}
            </TinderCard>
          ))}
        </div>
      )}
    </div>
  );
}
