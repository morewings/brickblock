import {axiosMock} from 'setupTests';
import config from 'config';
import {CONTRIBUTORS} from 'Redux/constants/';
import {getData} from 'Redux/actions/getData';

const actionMock = {
  type: CONTRIBUTORS.GET,
  payload: 'No bullshit here',
  meta: {
    itemsPerPage: config.itemsPerPage,
  },
};

axiosMock.onGet(config.dataUrl).reply(200, actionMock.payload);

describe('Redux > actions > getData', () => {
  it('returns proper action type', () => {
    expect(getData().type).toEqual(CONTRIBUTORS.GET);
    expect(getData().itemsPerPage).toEqual(actionMock.itemsPerPage);
  });
  it('returns Promise as payload', () => getData().payload.then((response) => {
    expect(response.data).toEqual(actionMock.payload);
  }));
});
