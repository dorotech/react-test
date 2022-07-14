import "./App.scss";
import Banner from "./component/banner/banner";
import CardArea from "./component/cardArea/cardArea";
import FilterBar from "./component/filterBar/filterBar";

function App() {
  return (
    <div className="flex items-center flex-col mx-auto sm:w-full md:w-10/12">
      <Banner></Banner>
      <FilterBar></FilterBar>
      <CardArea></CardArea>
    </div>
  );
}

export default App;
