import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import DetailsPage from "./DetailsPage";
import classes from "./HomePageAdmin.module.css";
import useFetchApi from "../Custom Hooks/useFetchApi";

export default function HomePage() {
  // const url =
  //   "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
  const url = "https://60f7cc909cdca00017454ffd.mockapi.io/apidata/users";
  const { apiResults, isLoading } = useFetchApi(url);
  const [position, setPosition] = useState(-1);
  const [isClicked, setIsClicked] = useState(false);
  const [actualData, setActualData] = useState(apiResults);
  useEffect(() => {
    setActualData(apiResults);
  }, [apiResults]);
  //console.log(actualData);
  const detailsDummy = {
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    phone: "",
  };
  const [detailsObj, setDetailsObj] = useState(detailsDummy);
  const changeDetailsData = (pos, details, isClicked) => {
    setPosition(pos);
    setDetailsObj(details);
    setIsClicked(isClicked);
  };

  const onSearchDataChanged = (data) => {
    if (data.length > 0) {
      const newSearchedData = actualData.filter(({ firstName, lastName }) => {
        if (firstName.toLowerCase().includes(data.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });

      //console.log(newSearchedData);
      setActualData(newSearchedData);
    } else {
      setActualData(apiResults);
    }
  };
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.adminPageWrapper}>
          <CustomTable
            apiResults={actualData}
            changeDetailsData={changeDetailsData}
            position={position}
            onSearchDataChanged={onSearchDataChanged}
            isClicked={isClicked}
          />
          <DetailsPage detailsObj={detailsObj} isClicked={isClicked} />
        </div>
      )}
    </div>
  );
}
