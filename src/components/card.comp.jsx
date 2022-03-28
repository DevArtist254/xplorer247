import { connect } from 'react-redux';
import { loadTour } from './../redux/tour/tour.actions';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import formatDate from './../utils/formatDate';

function Card({ data, loadTour }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src={data.imageCover}
            alt="Tour 1"
            className="card__picture-img"
          />
        </div>

        <h3 className="heading-tertirary">
          <span>{data.name}</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">
          {data.difficulty}-difficult {data.duration}-day tour
        </h4>
        <p className="card__text">{data.summary}</p>
        <div className="card__data">
          <Icon icon="emojione-monotone:world-map" className="card__icon" />
          <span>{data.startLocation.description}</span>
        </div>
        <div className="card__data">
          <Icon icon="bx:bx-calender" className="card__icon" />
          <span>{formatDate(data.startDates[0])}</span>
        </div>
        <div className="card__data">
          <Icon icon="bi:flag-fill" className="card__icon" />
          <span>{data.locations.length}-stops</span>
        </div>
        <div className="card__data">
          <Icon icon="gls:map-users" className="card__icon" />
          <span>{data.maxGroupSize}-people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">${data.price}</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{data.ratingsAverage}</span>
          <span className="card__footer-text">
            rating ({data.ratingsQuantity})
          </span>
        </p>
        <div
          onClick={async () => {
            await loadTour(`${data._id}`);
            navigate('/tour');
          }}
          className="btn btn--green btn--small"
        >
          Details
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loadTour: (id) => dispatch(loadTour(id)),
});

export default connect(null, mapDispatchToProps)(Card);
