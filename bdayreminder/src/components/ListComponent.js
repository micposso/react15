import React from "react";
import List from './List'
import Card from "react-bootstrap/Card";

const Listcomponent = ({ people, month, currentMonth }) => {
  let bdayMonths = [];
  let displayCurrentMonth;

  return (
    <>
      {people.map((person) => {
        bdayMonths.push(Object.keys(person)[0]);

        if (Object.keys(person).includes(currentMonth)) {
          displayCurrentMonth = true;
        }

        let dataMonhts = Object.entries(person)[0][1];

        dataMonhts.map((monthData) => (
        
        //console.log(monthData);
            <>
            <h1>{monthData.name}</h1>
            <List />
            </>
      ));
      })}
    </>
  );
};

export default Listcomponent;
