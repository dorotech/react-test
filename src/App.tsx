import Banner from "./component/banner/banner";
import CardArea from "./component/cardArea/cardArea";

const App = () => {
  return (
    <div className="flex items-center flex-col mx-auto sm:w-full md:w-10/12">
      <Banner />
      <CardArea />
    </div>
  );
};

export default App;
