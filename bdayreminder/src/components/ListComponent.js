import React from "react";
import Card from "react-bootstrap/Card";

const Listcomponent = ({ people, month, currentMonth }) => {
  let bdayMonths = [];

  people.map((person) => {
    bdayMonths.push(Object.keys(person)[0]);
  });

  if (bdayMonths.includes(currentMonth)) {
    console.log("current month is in the data");
  } else {
    console.log("current month is NOT the data");
  }

  return (
    <>
      {people.map((person) => {
        //match current month with the current month in the data
        if (Object.keys(person).includes(currentMonth)) {

          person[currentMonth].map((thisMonth) => {
            const {name} = thisMonth;
            return (
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          });
        }
      })}
    </>
  );
};

export default Listcomponent;
