import { getSearchParamsToObject } from '.';

describe('getSearchParamsToObject', () => {
  it('should get an search param string and transform to object', () => {
    const searchParam = '?gender=female&status=unknown&name=&species=c';

    expect(getSearchParamsToObject(searchParam)).toEqual({
      gender: 'female',
      status: 'unknown',
      name: '',
      species: 'c',
    });
  });
});
