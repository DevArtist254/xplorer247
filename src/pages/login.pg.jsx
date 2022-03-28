import { connect } from 'react-redux';
import { useState } from 'react';
import { loadAuthUser } from './../redux/auth/auth.actions';
import { useNavigate } from 'react-router-dom';

function Login({ loadAuthUser }) {
  const navRoute = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
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
    navRoute('/');
  }

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log on to your account!</h2>
        <form className="form form--signup" onSubmit={onSubmit}>
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

export default connect(null, mapDispatchToProps)(Login);
