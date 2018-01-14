import {axiosMock} from 'setupTests';
import config from 'config';
import {CONTRIBUTORS} from 'Redux/constants/';
import {getData} from 'Redux/actions/getData';

const payload = {
  data: 'No bullshit here',
};

axiosMock.onGet(config.dataUrl).reply(200, payload);

describe('Redux > actions > getData', () => {
  it('returns proper action type', () => {
    expect(getData().type).toEqual(CONTRIBUTORS.GET);
  });
  it('returns Promise as payload', () => getData().payload.then((response) => {
    expect(response.data).toEqual(payload);
  }));
});
