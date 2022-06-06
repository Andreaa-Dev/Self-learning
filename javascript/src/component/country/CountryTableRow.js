import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";

import {
  addFavoriteCountry,
  removeFavoriteCountry,
} from "../redux/action/favorite";

export const CustomizedLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export default function CountryTableRow({ country }) {
  const language = country.languages;
  const dispatch = useDispatch();

  const itemExist = useSelector((state) =>
    state.favoriteCountry.favoriteCountry.some((item) => {
      return item.name.common === country.name.common;
    })
  );

  const onClickHandler = () => {
    if (itemExist) {
      dispatch(removeFavoriteCountry(country));
    } else {
      dispatch(addFavoriteCountry(country));
    }
  };

  //sort here
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  return (
    <TableRow key={country.name.common}>
      <TableCell>
        <CustomizedLink to={`/${country.name.common}`}>
          {country.name.common}
        </CustomizedLink>
      </TableCell>
      <TableCell align="left">
        {country.capital ? country.capital[0] : "No capital"}
      </TableCell>
      <TableCell> {country.flag}</TableCell>
      <TableCell>
        {language
          ? Object.values(language).map((item) => <p key={uuidv4()}>{item}</p>)
          : "No language"}
      </TableCell>
      <TableCell> {country.population}</TableCell>
      <TableCell>
        <FavoriteIcon
          sx={{ color: itemExist ? "red" : "" }}
          onClick={onClickHandler}
        />
      </TableCell>
    </TableRow>
  );
}
