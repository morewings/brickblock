import {lensPath, set, compose, view} from 'ramda';
import {CONTRIBUTORS} from 'Redux/constants';

export const initialState = {
  ico: {
    raw: [],
    visible: [],
  },
  preIco: {
    raw: [],
    visible: [],
  },
};

const ContributorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${CONTRIBUTORS.GET}_FULFILLED`: {
      const {ico, preIco} = action.payload.data;
      const rawIcoLens = lensPath(['ico', 'raw']);
      const rawPreIcoLens = lensPath(['preIco', 'raw']);
      return compose(set(rawIcoLens, ico), set(rawPreIcoLens, preIco))(state);
    }
    case CONTRIBUTORS.SET_VISIBLE: {
      const visibleLens = lensPath([action.dataSource, 'visible']);
      return set(visibleLens, action.visibleData, state);
    }
    default: {
      return state;
    }
  }
};

export default ContributorsReducer;

