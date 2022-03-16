import * as React from "react";
import { Col, Input, Label } from "reactstrap";

interface FormInfoType {}

const FormInfo: React.FunctionComponent<FormInfoType> = (props) => {
  return (
    <>
      <Col xs={12} md={6} className="mb-4">
        <Label>First Name</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        <Input type="text" placeholder="First name" />
      </Col>

      <Col xs={12} md={6} className="mb-4">
        <Label>Last Name</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        <Input type="text" placeholder="Last name" />
      </Col>

      <Col xs={12} md={6} className="mb-4">
        <Label>Mobile phone number</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        <Input type="text" placeholder="Mobile phone number" />
      </Col>
      <Col xs={12} md={6}></Col>
    </>
  );
};

export default FormInfo;
