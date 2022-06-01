import { Routes, Route } from "react-router-dom";

import NavBar from "./component/themeContext/NavBar";
import CountryTable from "./component/country/CountryTable";
import CountryDetail from "./component/country/CountryDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CountryTable />}></Route>
        <Route path="/:name" element={<CountryDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
