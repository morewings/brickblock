import {slice} from 'ramda';
import ContributorsReducer, {initialState} from 'Redux/reducers/ContributorsReducer';
import config from 'config';
import {CONTRIBUTORS} from 'Redux/constants';
import {contributorsMock} from '__mocks__/dataMocks';

describe('Redux > reducers > ContributorsReducer', () => {
  it('returns initial state by default', () => {
    expect(ContributorsReducer(initialState, 'make me covfefe')).toEqual(initialState);
  });
  it(`sets 'raw' data and populates 'visible' on ${CONTRIBUTORS.GET}_FULFILLED action`, () => {
    const itemsPerPage = 10;
    const payload = {
      data: {
        ico: contributorsMock,
        preIco: contributorsMock,
      },
    };
    const expectedState = {
      ico: {
        raw: payload.data.ico,
        visible: slice(0, itemsPerPage, contributorsMock),
      },
      preIco: {
        raw: payload.data.preIco,
        visible: slice(0, itemsPerPage, contributorsMock),
      },
    };
    expect(ContributorsReducer(initialState, {
      type: `${CONTRIBUTORS.GET}_FULFILLED`,
      meta: {
        defaultTab: config.defaultTab,
        itemsPerPage,
      },
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
