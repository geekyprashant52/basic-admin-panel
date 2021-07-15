import React from "react";
import CustomSearch from "./CustomSearch";
import classes from "./HomePageAdmin.module.css";

export default function CustomTable(props) {
  //const MenuItems = props.apiResults.map((item ,  pos) => {

  return (
    <div className={classes.tableWrapper}>
      <div>
        <CustomSearch onSearchDataChanged={props.onSearchDataChanged} />
      </div>
      <div className={classes.CustomtableWrapper}>
        <table className={classes.Customtable}>
          <thead className={classes.tableHead}>
            <tr>
              <th>id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody className={classes.tableBody}>
            {props.apiResults.map((item, pos) => {
              const selectedClass = [classes.tableRowsmall];
              if (pos === props.position) {
                selectedClass.push(classes.tableRowsmallwithBorder);
              }
              const {
                address,
                description,
                email,
                firstName,
                id,
                lastName,
                phone,
              } = item;
              return (
                <tr
                  className={selectedClass.join(" ")}
                  key={pos}
                  onClick={() => {
                    const details = {
                      email,
                      firstName,
                      id,
                      lastName,
                      phone,
                      address,
                      description,
                    };
                    props.changeDetailsData(pos, details, true);
                    //useChangeDetails(details);
                  }}
                >
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
