export const getSearchParamsToObject = (search: string) => {
  const [_, params] = search.split('?');

  const parsedSearch = params.split('&').reduce((object, param) => {
    const [key, value] = param.split('=');

    return {
      ...object,
      [key]: value,
    };
  }, {});

  return parsedSearch;
};
