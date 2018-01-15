import PaginationReducer, {initialState} from 'Redux/reducers/PaginationReducer';
import {PAGE} from 'Redux/constants';

describe('Redux > reducers > PaginationReducer', () => {
  it('returns initial state by default', () => {
    expect(PaginationReducer(initialState, 'make me covfefe')).toEqual(initialState);
  });
  it(`works properly with ${PAGE.SET} action`, () => {
    const payload = 23456;
    const expectedStatePreIco = {
      preIco: {
        page: payload,
      },
      ico: {
        page: 1,
      },
    };
    const expectedStateIco = {
      preIco: {
        page: 1,
      },
      ico: {
        page: payload,
      },
    };
    expect(PaginationReducer(initialState, {
      type: PAGE.SET,
      page: payload,
      dataSource: 'preIco',
    })).toEqual(expectedStatePreIco);
    expect(PaginationReducer(initialState, {
      type: PAGE.SET,
      page: payload,
      dataSource: 'ico',
    })).toEqual(expectedStateIco);
  });
});
