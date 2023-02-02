import { setSearchParams } from '.';

describe('getSearchParamsToObject', () => {
  it('should get an object and set search params on URL', () => {
    const searchParamObject = {
      name: 'Rick',
      specie: 'human',
      gender: 'male',
      status: 'alive',
    };

    setSearchParams(searchParamObject);
    expect(window.location.search).toBe('?name=Rick&specie=human&gender=male&status=alive');
  });
});
