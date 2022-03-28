import { combineReducers } from 'redux';
import tourReducer from './tour/tour.reducer';
import toursReducer from './tours/tours.reducer';
import authReducer from './auth/auth.reducer';
import userReducer from './users/users.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
  whitelist: ['auth', 'tours'],
};

const rootReducer = combineReducers({
  tours: toursReducer,
  tour: tourReducer,
  auth: authReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;
