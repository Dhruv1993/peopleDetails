import React from "react";
import { Col, Row, Avatar, Button } from "antd";

const colorEdit = {
  background: "black",
  color: "white",
  padding: "0 40px",
  marginBottom: "20px"
};
const colorDelete = {
  background: "rgba(rgb(190, 200, 200))",
  color: "black",
  padding: "0 30px"
};
const pad = {
  padding: "5px"
};
const contain ={ 
    wordWrap: "break-word",
   
}
const FaceCardDetails = ({ data }) => {
  //   console.log(data.photo);
  const {
    firstName,
    secondName,
    contact,
    photo,
    employeeId,
    userName,
    email
  } = data;

  return (
    <div>
      <Row>
        <Col xs={24} md={2} style={pad}>
          <Avatar size={64} src={photo} />
        </Col>
        <Col xs={24} md={5}>
          FirstName: {firstName}<br/>
          LastName: {secondName} <br/>
          Contact: {contact}
        </Col>
        
        <Col xs={24} md={8}>
          Employee-ID: {employeeId} <br/>
          UserName: {userName} <br/>
          <p style={contain}>Email: {email}</p>  <br/>
        </Col>

        <Col xs={24} md={6}>
          <Button type="default" style={colorEdit}>
            Edit
          </Button> <br/>
          <Button style={colorDelete}>Delete</Button>
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
};

export default FaceCardDetails;
