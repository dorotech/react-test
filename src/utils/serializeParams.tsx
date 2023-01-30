import { FilterParams } from "../interfaces/Filters";

const serializeParams = (params: FilterParams) => {
  const entries = Object.entries(params).filter(
    ([_key, value]) => value !== "none" && value !== "" && value !== undefined
  );
  return Object.fromEntries(entries) as FilterParams;
};

export default serializeParams;
