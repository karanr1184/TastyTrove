import Pages from "./pages/Pages";
import Cuisines from "./components/Cuisines";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
			<BrowserRouter>
      <Navbar />
      <Search />
      <Cuisines />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
