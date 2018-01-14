import {DATA} from 'Redux/constants';

export const initialState = {
  ico: [],
  preIco: [],
};

const ContributorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${DATA.GET}_FULFILLED`: {
      const {ico, preIco} = action.payload.data;
      return {
        ...state,
        ico,
        preIco,
      };
    }
    default: {
      return state;
    }
  }
};

export default ContributorsReducer;
