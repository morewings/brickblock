import { combineReducers } from 'redux';
import ContributorsReducer from 'Redux/reducers/ContributorsReducer';
import PaginationReducer from 'Redux/reducers/PaginationReducer';

const rootReducer = combineReducers({
  contributors: ContributorsReducer,
  pagination: PaginationReducer,
});

export default rootReducer;
