import { BrowserRouter } from "react-router-dom";
import { RootProvider } from "./components/RootProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <RootProvider />
    </BrowserRouter>
  );
}

export default App;
