import React from 'react';
import Cards from '../components/cards.comp';

function Overview({ cards, setTour }) {
  return (
    <div className="main">
      <Cards cards={cards} setTour={setTour} />
    </div>
  );
}

export default Overview;
