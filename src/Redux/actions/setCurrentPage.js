import {PAGE} from 'Redux/constants/';

export const setCurrentPage = (page, dataSource) => ({
  type: PAGE.SET,
  page,
  dataSource,
});
