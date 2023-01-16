import React from "react";
import Router from "./routes";
import { BrowserRouter as Routera, Routes, Route } from "react-router-dom";
import Persons from "./views/persons";
import Details from "./views/details";
import ErrorPage from "./views/error";
function App() {
return(
<Routera>
  <Routes>
    <Route path="/" element={<Persons/>}/>
    <Route path="/details/:id"  element={<Details />}  />
    <Route path="*" element={<ErrorPage/>}/>
  </Routes>
</Routera>
)
}
export default App;
