import React from "react";
import Card from 'react-bootstrap/Card';

const Listcomponent = ({people}) => {
  return (
    <>
    {people.map((person) => {
      
      let personArray = Object.entries(person)[0][1];

      return(
        personArray.map((personInfo) => {
          return (
            <Card className="my-2">
            <Card.Img variant="top" src={personInfo.image} />
            <Card.Body>
              <Card.Title>{personInfo.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          )
        })
      )

 


    })}
    </>
  );
};

export default Listcomponent;
