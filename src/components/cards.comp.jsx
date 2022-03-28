import Card from './card.comp';

function Cards({ cards, setTour }) {
  return (
    <div className="card-container">
      {cards.map((cur) => (
        <Card key={cur._id} data={cur} setTour={setTour} />
      ))}
    </div>
  );
}

export default Cards;
