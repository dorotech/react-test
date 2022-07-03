import { ReactElement } from "react";
import { CharacterProvider } from "./contexts/CharacterContext";
import CustomRouter from "./routes/CustomRouter";

function App(): ReactElement {
  return (
    <CharacterProvider>
      <CustomRouter />
    </CharacterProvider>
  );
}

export default App;
