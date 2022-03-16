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
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Create new account
      </p>
      <Container>
        <FormTitle />
        <Row
          style={{
            fontWeight: "bold",
          }}
        >
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
