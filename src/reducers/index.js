import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer';

const rootReducer = combineReducers({
  weatehr: WeatherReducer
});

export default rootReducer;
