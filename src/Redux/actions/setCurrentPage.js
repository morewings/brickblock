import {curry} from 'ramda';
import {PAGE} from 'Redux/constants/';
import {setVisibleData} from 'Redux/actions';

export const setCurrentPage = (page, dataSource) => ({
  type: PAGE.SET,
  page,
  dataSource,
});

export const setCurrentPageThunk = curry((page, dataSource, dispatch) => {
  dispatch(setCurrentPage(page, dataSource));
  dispatch(setVisibleData(page, dataSource));
});
