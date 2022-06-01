import { dividerClasses } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import CountryTable from "./component/country/CountryTable";
import NavBar from "./component/themeContext/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CountryTable />}></Route>
      </Routes>
    </>
  );
}

export default App;
