import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Text = styled(Typography)`
  font-size: 20px;
  font-weight: 900;
`;

function Country() {
  return (
    <div>
      <Button sx={{ backgroundColor: "red" }}>Text</Button>
      <Text>Text</Text>
    </div>
  );
}

export default Country;
