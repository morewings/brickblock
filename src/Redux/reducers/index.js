import { combineReducers } from 'redux';
import SampleReducer from 'Redux/reducers/SampleReducer';
import ContributorsReducer from 'Redux/reducers/ContributorsReducer';

const rootReducer = combineReducers({
  sample: SampleReducer,
  Contributors: ContributorsReducer,
});

export default rootReducer;
