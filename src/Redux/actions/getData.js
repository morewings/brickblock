import axios from 'axios';
import config from 'config';
import {DATA} from 'Redux/constants/';

export const getData = () => ({
  type: DATA.GET,
  payload: axios.get(config.dataUrl)
    .catch((error) => {
      console.error(error);
    }),
});
