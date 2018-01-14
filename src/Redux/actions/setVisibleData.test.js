import {setVisibleData, setStart, setEnd, sliceData} from 'Redux/actions/setVisibleData';
import {CONTRIBUTORS} from 'Redux/constants/';

describe('Redux > actions > setVisibleData', () => {
  it('creates proper action', () => {
    const visibleData = 'Look at me, bitches!';
    const dataSource = 'I am the source!';
    expect(setVisibleData(dataSource, visibleData)).toEqual({
      type: CONTRIBUTORS.SET_VISIBLE,
      visibleData,
      dataSource,
    });
  });
});

describe('Redux > actions > setStart', () => {
  const page = 10;
  const itemsPerPage = 11;
  const dataRaw = 'Blue rare';
  it('calculates start index', () => {
    const expectedIndex = 99;
    expect(setStart(page, itemsPerPage, dataRaw).start).toBe(expectedIndex);
  });
  it('also returns raw data', () => {
    expect(setStart(page, itemsPerPage, dataRaw).dataRaw).toEqual(dataRaw);
  });
});

describe('Redux > actions > setEnd', () => {
  const dataRaw = 'Blue rare';
  const itemsPerPage = 11;
  const start = 99;
  const dataObj = {
    dataRaw,
    start,
    itemsPerPage,
  };
  it('calculates end index', () => {
    const expectedIndex = 110;
    expect(setEnd(itemsPerPage, dataObj).end).toBe(expectedIndex);
  });
  it('also returns raw data and start position', () => {
    expect(setEnd(itemsPerPage, dataObj).dataRaw).toEqual(dataRaw);
    expect(setEnd(itemsPerPage, dataObj).start).toEqual(start);
  });
});

describe('Redux > actions > sliceData', () => {
  const dataRaw = [1, 2, 3, 4, 5, 6, 7];
  const start = 0;
  const end = 6;
  const dataObj = {
    end,
    start,
    dataRaw,
  };
  it(`slices provided array at ${start} until ${end}`, () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(sliceData(dataObj)).toEqual(expectedResult);
  });
});

describe('Redux > actions > setVisibleDataThunk', () => {
  const dataRaw = [1, 2, 3, 4, 5, 6, 7];
  const start = 0;
  const end = 6;
  const dataObj = {
    end,
    start,
    dataRaw,
  };
  it(`slices provided array at ${start} until ${end}`, () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(sliceData(dataObj)).toEqual(expectedResult);
  });
});

