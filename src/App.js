import React, { useState, useEffect } from "react";
import "./Main.scss";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, updateFetchedData] = useState([]);
  let { info, results } = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    //função imediatamente invocada
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-5">
        React & Morty <span className="text-primary">Wiki.</span>
      </h1>

      <div className="container">
        <div className="row text-center">
          <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        </div>
        <div className="row">
          <div className="col-lg-3 col-12" />
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            info={info}
          />
        </div>
        <div className="row">
          <Filters
            setPageNumber={setPageNumber}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12" />
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            info={info}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
