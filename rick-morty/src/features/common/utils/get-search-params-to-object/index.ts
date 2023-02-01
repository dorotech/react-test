export const getSearchParamsToObject = (search: string) => {
  const searchParams = new URLSearchParams(search);
  const paramsArray = Array.from(searchParams.entries());
  const parsedParams = Object.fromEntries(paramsArray);

  return parsedParams;
};
