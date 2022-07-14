import "./App.scss";
import Banner from "./component/banner/banner";
import CardArea from "./component/cardArea/cardArea";
import FilterBar from "./component/filterBar/filterBar";

function App() {
  return (
    <div className="background-rick-morty flex items-center justify-start flex-col h-screen w-screen bg-slate-50">
      <div className="flex items-center justify-start flex-col w-full md:w-11/12 lg:w-9/12 h-full space-y-2">
        <Banner></Banner>
        <FilterBar></FilterBar>
        <CardArea></CardArea>
      </div>
    </div>
  );
}

export default App;
