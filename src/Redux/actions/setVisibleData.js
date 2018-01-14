import {curry, slice, compose} from 'ramda';
import config from 'config';
import {CONTRIBUTORS} from 'Redux/constants/';

export const setVisibleData = (dataSource, visibleData) => ({
  type: CONTRIBUTORS.SET_VISIBLE,
  visibleData,
  dataSource,
});

export const setStart = curry((page, itemsPerPage, dataRaw) => ({
  start: (page - 1) * itemsPerPage,
  dataRaw,
}));

export const setEnd = curry((itemsPerPage, dataObj) => ({
  start: dataObj.start,
  end: dataObj.start + itemsPerPage,
  dataRaw: dataObj.dataRaw,
}));

export const sliceData = curry((dataObj) => {
  const {start, end, dataRaw} = dataObj;
  return slice(start, end, dataRaw);
});

export const setVisibleDataThunk = curry((page, dataSource, dispatch, getState) => {
  const visibleData = compose(
    sliceData,
    setEnd(config.itemsPerPage),
    setStart(page, config.itemsPerPage),
  )(getState().contributors[dataSource].raw);
  dispatch(setVisibleData(dataSource, visibleData));
});
