import Header from "./components/Header";

function App(): JSX.Element {
   return (
      <div className="flex flex-col items-center">
        <Header />
        <h1>Rick and Morty Characters</h1>
      </div>
   )
}

export default App;