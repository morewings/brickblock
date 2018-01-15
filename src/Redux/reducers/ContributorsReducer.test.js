import ContributorsReducer, {initialState} from 'Redux/reducers/ContributorsReducer';
import {CONTRIBUTORS} from 'Redux/constants';

describe('Redux > reducers > ContributorsReducer', () => {
  it('returns initial state by default', () => {
    expect(ContributorsReducer(initialState, 'make me covfefe')).toEqual(initialState);
  });
  it(`works properly with ${CONTRIBUTORS.GET}_FULFILLED action`, () => {
    const payload = {
      data: {
        ico: ['Wealthy dude'],
        preIco: ['Even wealthier dude'],
      },
    };
    const expectedState = {
      ico: {
        raw: payload.data.ico,
        visible: [],
      },
      preIco: {
        raw: payload.data.preIco,
        visible: [],
      },
    };
    expect(ContributorsReducer(initialState, {
      type: `${CONTRIBUTORS.GET}_FULFILLED`,
      payload,
    })).toEqual(expectedState);
  });
  it(`works properly with ${CONTRIBUTORS.SET_VISIBLE} action`, () => {
    const payload = {
      data: 'someData',
    };
    const expectedStatePreIco = {
      ico: {
        raw: [],
        visible: [],
      },
      preIco: {
        raw: [],
        visible: payload,
      },
    };
    const expectedStateIco = {
      ico: {
        raw: [],
        visible: payload,
      },
      preIco: {
        raw: [],
        visible: [],
      },
    };
    expect(ContributorsReducer(initialState, {
      type: CONTRIBUTORS.SET_VISIBLE,
      visibleData: payload,
      dataSource: 'preIco',
    })).toEqual(expectedStatePreIco);
    expect(ContributorsReducer(initialState, {
      type: CONTRIBUTORS.SET_VISIBLE,
      visibleData: payload,
      dataSource: 'ico',
    })).toEqual(expectedStateIco);
  });
});
