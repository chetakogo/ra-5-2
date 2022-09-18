import React from 'react';
import Card from "./Card";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const Widget = (props) => (
  <Card className="card mb20" style={{width: '285px'}}>
    <CardTitle className="card-title">{props.title}</CardTitle>
    <CardBody className="card-body">
      {props.children}
    </CardBody>
    {props.footer && <CardFooter/>}
  </Card>
);

export default Widget;