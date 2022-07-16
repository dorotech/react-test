import "./App.scss";
import Banner from "./component/banner/banner";
import CardArea from "./component/cardArea/cardArea";

function App() {
  return (
    <div className="flex items-center flex-col mx-auto sm:w-full md:w-10/12">
      <Banner></Banner>
      <CardArea></CardArea>
    </div>
  );
}

export default App;
