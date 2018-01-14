import {PAGE} from 'Redux/constants';

export const initialState = {
  preIco: {
    page: 1,
  },
  ico: {
    page: 1,
  },
};

const PaginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${PAGE.SET}`: {
      return {
        ...state,
        [action.dataSource]: {
          page: action.page,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default PaginationReducer;
