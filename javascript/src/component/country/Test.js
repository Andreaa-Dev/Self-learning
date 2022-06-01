import React, { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

function Test() {
  const [theme, setTheme] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  const onClickHandler = () => {
    setTheme("dark");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <main>This app is using the dark mode</main>
      <button onClick={onClickHandler}></button>
    </ThemeProvider>
  );
}

export default Test;
