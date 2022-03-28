import { connect } from 'react-redux';
import React from 'react';
import UpLoadImg from './../components/upLoadImg';

const CurrentUser = ({ currentUser }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        alt="profile"
        src={currentUser.photo}
        style={{
          width: '360px',
          height: '360px',
          borderRadius: '250px',
        }}
      />
      <h1
        className="heading-primary"
        style={{
          color: 'grey',
        }}
      >
        {currentUser.fullName}
      </h1>
      <h2>{currentUser.email}</h2>
      <UpLoadImg />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(CurrentUser);
