import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from "./components/Filters/Filters";


function App() {
  let [pageNumber,setPageNumber] = useState(1);
  let [fetchData,updateFetchedData] = useState([]);
  let {info, results} = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  
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
        <div className="row">
          <div className="col-3">
            <Filters/>
          </div>
          <div className="col-8">
            <div className="row">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
