import { connect } from 'react-redux';
import { useState } from 'react';
import { loadAuthUser } from './../redux/auth/auth.actions';

function Signup({ loadAuthUser }) {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfrim: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    loadAuthUser(data);
  }

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Create your account!</h2>
        <form className="form form--signup" onSubmit={onSubmit}>
          <div className="form__group">
            <label className="form__label">FullName</label>
            <input
              name="fullName"
              type="name"
              className="form__input"
              value={data.fullName}
              placeholder="Please enter your fullname"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label className="form__label">Email</label>
            <input
              name="email"
              type="email"
              className="form__input"
              value={data.email}
              placeholder="Please enter your vaild email address"
              onChange={handleChange}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label">Password</label>
            <input
              name="password"
              type="password"
              className="form__input"
              value={data.password}
              placeholder="Please enter a vaild password"
              onChange={handleChange}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label">Password Confrim</label>
            <input
              name="passwordConfrim"
              type="password"
              className="form__input"
              value={data.passwordConfrim}
              placeholder="Please confirm your password"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <input className="btn btn--green" type="submit" />
          </div>
        </form>
      </div>
    </main>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loadAuthUser: (data) => dispatch(loadAuthUser(data)),
});

export default connect(null, mapDispatchToProps)(Signup);
