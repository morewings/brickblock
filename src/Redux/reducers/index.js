import { combineReducers } from 'redux';
import ContributorsReducer from 'Redux/reducers/ContributorsReducer';

const rootReducer = combineReducers({
  Contributors: ContributorsReducer,
});

export default rootReducer;
