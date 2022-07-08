import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(input) => {
          setPageNumber(1);
          setSearch(input.target.value);
        }}
        className={`${styles.input} border border-primary border border-3 rounded`}
        placeholder="Search for characters"
        type="text"
      />
      <button
        onClick={(input) => {
          input.preventDefault();
        }}
        className="btn btn-primary fs-5"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
