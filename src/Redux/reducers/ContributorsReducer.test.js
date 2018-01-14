import ContributorsReducer, {initialState} from 'Redux/reducers/ContributorsReducer';
import {DATA} from 'Redux/constants';

describe('Redux > reducers > ContributorsReducer', () => {
  it('returns initial state by default', () => {
    expect(ContributorsReducer(initialState, 'make me covfefe')).toEqual(initialState);
  });
  it(`works properly with ${DATA.GET}_FULFILLED action`, () => {
    const payload = {
      data: {
        ico: 'Wealthy dude',
        preIco: 'Even wealthier dude',
      },
    };
    expect(ContributorsReducer(initialState, {
      type: `${DATA.GET}_FULFILLED`,
      payload,
    })).toEqual(payload.data);
  });
});
