import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from "./components/Filters/Filters";
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';


function App() {
  let [search,setSearch] = useState("");
  let [pageNumber,setPageNumber] = useState(1);
  let [fetchData,updateFetchedData] = useState([]);
  let {info, results} = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    //função imediatamente invocada
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })()
  },[api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-5">
        React & Morty <span className="text-primary">Wiki.</span>
      </h1>

      <div className="container">
        <div className="row text-center">
          <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
        </div>
        <div className="row">
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
        </div>
        <div className="row">
          <Filters/>
          <div className="col-8">
            <div className="row">
             <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
