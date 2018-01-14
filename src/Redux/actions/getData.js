import axios from 'axios';
import config from 'config';
import {CONTRIBUTORS} from 'Redux/constants/';

export const getData = () => ({
  type: CONTRIBUTORS.GET,
  payload: axios.get(config.dataUrl)
    .catch((error) => {
      console.error(error);
    }),
});
