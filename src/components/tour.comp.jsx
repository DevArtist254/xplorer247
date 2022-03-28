import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import LeadGuide from './../img/users/user-19.jpg';
import TourGuide from './../img/users/user-18.jpg';
import Intern from './../img/users/user-17.jpg';
import Logo from './../img/logo-white.png';
import formatDate from './../utils/formatDate';

function Tour({ data }) {
  return (
    <div>
      <section
        className="section-header"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(125, 213, 111, 0.3), rgba(40, 180, 136, 0.6)),url(${data.imageCover})`,
        }}
      >
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{data.name}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <Icon
                icon="fluent:calendar-clock-16-filled"
                className="heading-box__icon"
              />
              <span className="heading-box__text">{data.duration} days</span>
            </div>
            <div className="heading-box__detail">
              <Icon
                icon="emojione-monotone:world-map"
                className="heading-box__icon"
              />
              <span className="heading-box__text">
                {data.startLocation.description}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              <div className="overview-box__detail">
                <Icon
                  icon="emojione-monotone:world-map"
                  className="overview-box__icon"
                />
                <span className="overview-box__label">Next date</span>
                <span className="overview-box__text">
                  {formatDate(data.startDates[0])}
                </span>
              </div>
              <div className="overview-box__detail">
                <Icon
                  icon="fluent:arrow-trending-checkmark-20-filled"
                  className="overview-box__icon"
                />
                <span className="overview-box__label">Difficulty</span>
                <span className="overview-box__text">{data.difficulty}</span>
              </div>
              <div className="overview-box__detail">
                <Icon icon="gls:map-users" className="overview-box__icon" />
                <span className="overview-box__label">Participants</span>
                <span className="overview-box__text">
                  {data.maxGroupSize} people
                </span>
              </div>
              <div className="overview-box__detail">
                <Icon
                  icon="fluent:star-12-filled"
                  className="overview-box__icon"
                />
                <span className="overview-box__label">Rating</span>
                <span className="overview-box__text">
                  {data.ratingsAverage} / 5
                </span>
              </div>
            </div>

            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

              <div className="overview-box__detail">
                <img
                  src={LeadGuide}
                  alt="Lead guide"
                  className="overview-box__img"
                />
                <span className="overview-box__label">Lead guide</span>
                <span className="overview-box__text">Steven Miller</span>
              </div>
              <div className="overview-box__detail">
                <img
                  src={TourGuide}
                  alt="Tour guide"
                  className="overview-box__img"
                />
                <span className="overview-box__label">Tour guide</span>
                <span className="overview-box__text">Lisa Brown</span>
              </div>
              <div className="overview-box__detail">
                <img src={Intern} alt="Intern" className="overview-box__img" />
                <span className="overview-box__label">Intern</span>
                <span className="overview-box__text">Max Smith</span>
              </div>
            </div>
          </div>
        </div>

        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">About the {data.name}</h2>
          <p className="description__text">{data.summary}</p>
          <p className="description__text">{data.description}</p>
        </div>
      </section>

      <section className="section-pictures">
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--1"
            src={data.images[0]}
            alt="The Park Camper Tour 1"
          />
        </div>
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--2"
            src={data.images[1]}
            alt="The Park Camper Tour 1"
          />
        </div>
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--3"
            src={data.images[2]}
            alt="The Park Camper Tour 1"
          />
        </div>
      </section>

      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src={Logo} alt="Natours logo" className="" />
          </div>
          <img src={data.images[2]} alt="" className="cta__img cta__img--1" />
          <img src={data.images[1]} alt="" className="cta__img cta__img--2" />

          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">
              {data.duration} days. 1 adventure. Infinite memories. Make it
              yours today!
            </p>
            <button className="btn btn--green span-all-rows">
              Book tour now!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = ({ tour }) => ({
  data: tour.tour,
});

export default connect(mapStateToProps)(Tour);
