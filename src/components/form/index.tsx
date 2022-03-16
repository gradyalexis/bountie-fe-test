import * as React from "react";
import { Container, Row } from "reactstrap";
import FormAddress from "./FormAddress";
import FormContact from "./FormContact";
import FormInfo from "./FormInfo";
import FormTitle from "./FormTitle";
import PrivacyNote from "./PrivacyNote";

interface FormType {}

const Form: React.FunctionComponent<FormType> = (props) => {
  return (
    <Container style={{ marginTop: "100px" }}>
      <p className="text-2xl font-semibold">Create new account</p>
      <Container>
        <FormTitle />
        <Row className="font-bold">
          <FormInfo />
          <FormAddress />
          <FormContact />
          <PrivacyNote />
        </Row>
      </Container>
    </Container>
  );
};

export default Form;
