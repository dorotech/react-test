export const setSearchParams = (params: Record<string, any>) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'undefined') return;

    searchParams.set(key, `${value}`);
  });

  window.history.pushState({}, '', `?${searchParams.toString()}`);
};
