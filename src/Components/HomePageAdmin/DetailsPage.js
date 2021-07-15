import React from "react";
import classes from "./HomePageAdmin.module.css";

export default function DetailsPage(props) {
  if (props.isClicked) {
    console.log(props.isClicked);
  }

  const { email, firstName, id, lastName, phone, address, description } =
    props && props.detailsObj;
  return (
    <div className={classes.DetailsWrapper}>
      <div className={classes.DetailsPage}>
        <h2 style={{ fontSize: "34px", fontWeight: "600" }}>Datails</h2>
        <p style={{ fontStyle: "italic", fontSize: "20px", color: "#606060" }}>
          Click on the table item to get detailed information
        </p>
        <div
          className={
            props.isClicked
              ? classes.detailsInfoWrapperVisible
              : classes.detailsInfoWrapperInvisible
          }
        >
          <h4>
            User Selected:{" "}
            <span className={classes.dynamicDatatext}>
              {" "}
              {`${firstName || ""} ${lastName || ""}`}
            </span>
          </h4>
          <span>
            <h4>Description:</h4>
            <p className={classes.descriptionDetails}>{description || ""}</p>
          </span>

          <h4>
            Address:{" "}
            <span className={classes.dynamicDatatext}>
              {address ? address.streetAddress : ""}
            </span>
          </h4>
          <h4>
            City:{" "}
            <span className={classes.dynamicDatatext}>
              {" "}
              {address ? address.city : ""}
            </span>
          </h4>
          <h4>
            State:{" "}
            <span className={classes.dynamicDatatext}>
              {" "}
              {address ? address.state : ""}
            </span>
          </h4>
          <h4>
            Zip:{" "}
            <span className={classes.dynamicDatatext}>
              {address ? address.zip : ""}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}
