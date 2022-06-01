import "./App.css";
import CountryTable from "./component/country/CountryTable";

import NavBar from "./component/themeContext/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <CountryTable />
    </div>
  );
}

export default App;
