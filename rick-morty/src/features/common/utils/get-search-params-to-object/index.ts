export const getSearchParamsToObject = (search: string) => {
  const [_, params] = search.split('?');

  if (!params) return {};

  const parsedSearch = params.split('&').reduce((object, param) => {
    const [key, value] = param.split('=');

    return {
      ...object,
      [key]: value,
    };
  }, {});

  return parsedSearch;
};
