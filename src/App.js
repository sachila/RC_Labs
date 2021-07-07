import { BrowserRouter } from "react-router-dom";
import { RootProvider } from "./components/RootProvider";

function App() {
  return (
    <BrowserRouter>
      <RootProvider />
    </BrowserRouter>
  );
}

export default App;
