import React from 'react';
import { useState } from 'react';
import './tinderCards.scss';
import TinderCard from 'react-tinder-card';
export default function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'rohit',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8hGDCD0TInlbZYaHySeYv0Hnp9AmnK_l2rA&usqp=CAU',
    },
    {
      name: 'rohit2',
      url:
        'https://timesofindia.indiatimes.com/thumb/msid-75294817,width-1200,height-900,resizemode-4/.jpg',
    },
    {
      name: 'rohit3',
      url:
        'https://i.pinimg.com/736x/48/1e/fb/481efbbfdf380b7294f471e0671c26d9.jpg',
    },
  ]);
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
              style={{ backgroundImage: `url(${character.url})` }}
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
