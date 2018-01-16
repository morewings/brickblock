import {lensPath, set, compose, slice} from 'ramda';
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
      const {itemsPerPage} = action.meta;
      const rawIcoLens = lensPath(['ico', 'raw']);
      const rawPreIcoLens = lensPath(['preIco', 'raw']);
      const visibleIcoLens = lensPath(['ico', 'visible']);
      const visiblePreIcoLens = lensPath(['preIco', 'visible']);
      const initVisiblePreIco = slice(0, itemsPerPage, action.payload.data.preIco);
      const initVisibleIco = slice(0, itemsPerPage, action.payload.data.ico);
      return compose(
        set(visiblePreIcoLens, initVisiblePreIco),
        set(visibleIcoLens, initVisibleIco),
        set(rawIcoLens, ico),
        set(rawPreIcoLens, preIco),
      )(state);
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

