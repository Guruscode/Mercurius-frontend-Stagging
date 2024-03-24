import { Outlet } from "react-router";
import Header from "./components/molecules/Header";
import Footers from "./components/molecules/Footers";

function App() {
  return (
    <div className="App">

      <Header />
      <Outlet />
      <Footers />
    </div>
  );
}

export default App;
