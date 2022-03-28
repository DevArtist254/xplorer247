import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { loadToursAsync } from './redux/tours/tours.actions';
import { loadCurrentUser } from './redux/users/users.actions';
import Spinner from './components/withSpinner.comp';
import Nav from './components/nav.comp';
import Overview from './pages/overview.pg';
import Bookings from './pages/bookings.pg';
import CurrentUser from './pages/user.pg';
import Login from './pages/login.pg';
import Signup from './pages/signup.pg';
import './App.css';
import Google from './pages/google.pg';
import Tour from './components/tour.comp';

const OverviewWithSpinner = Spinner(Overview);

function App({ isloading, tours, loadItems, loadCurrentUser, token }) {
  useEffect(() => {
    loadItems();
    loadCurrentUser(token);
  }, [loadItems, loadCurrentUser, token]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<OverviewWithSpinner isloading={isloading} cards={tours} />}
        />
        <Route path="/tour" element={<Tour />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/me" element={<CurrentUser />} />
        <Route path="/login" element={<Login />}>
          <Route path=":google" element={<Google />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ tours, auth }) => ({
  isloading: tours.isLoading,
  tours: tours.tours,
  token: auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  loadItems: () => dispatch(loadToursAsync()),
  loadCurrentUser: (token) => dispatch(loadCurrentUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
