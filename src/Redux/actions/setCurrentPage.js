import {curry} from 'ramda';
import {PAGE} from 'Redux/constants/';
import {setVisibleDataThunk as setVisibleData} from 'Redux/actions/setVisibleData';

export const setCurrentPage = (page, dataSource) => ({
  type: PAGE.SET,
  page,
  dataSource,
});

export const setCurrentPageThunk = curry((page, dataSource, dispatch) => {
  dispatch(setCurrentPage(page, dataSource));
  dispatch(setVisibleData(page, dataSource));
});
