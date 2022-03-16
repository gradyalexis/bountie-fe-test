import * as React from "react";
import { Tooltip, Button, Col, Input, Label } from "reactstrap";

interface IPrivacyNoteProps {}

const PrivacyNote: React.FunctionComponent<IPrivacyNoteProps> = (props) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <>
      <Col
        xs={12}
        md={12}
        className="mt-5"
        style={{
          fontWeight: "normal",
        }}
      >
        <p className="text-xl font-semibold">
          Standard Privacy Note
        </p>
        <p className="italic">
          I warrant that the above information is true and correct. I understand that
          failure to answer all questions listed in this application from may
          prevent L'OCCITANE from processing my application; and L'OCCITANE may
          refuse to accept this application in the right of my individual circumstance.
        </p>
        <p className="italic">
          I understand that the information collected will be used and retained by L'OCCITANE
          for the purpose of (i) my application of membership program of L'OCCITANE (ii) providing
          member-exclusive services: and (iii) the daily management operation and maintenance of membership
          account at L'OCCITANE.
        </p>
        <p className="italic">
          I understand that it is necessary for me to provide L'OCCITANE with data in connection with
          the previlege. Failure to provide such data may result in L'OCCITANE stores or official website.
        </p>
        <p className="italic">
          L'OCCITANE reserves the right to change any of the terms and conditions without prior notice. Changes
          will be posted on signage placed at L'OCCITANE stores or official website.
        </p>
        <p className="italic">
          I understand that L'OCCITANE may use my personal information for the purpose of providing or promoting
          services/ products made available by L'OCCITANE. To choose whether to receive any promotional information
          sent by L'OCCITANE, please link the box below
        </p>
        <p className="mb-5">
          I want to receive information or communication from L'OCCITANE.
        </p>
      </Col>

      <div className="space-y-4 md:space-y-0 md:flex">
        <Col xs={12} md={4}>
          <div className="switch">
            <span id="TooltipExample" className="mr-5">SMS & Mobile Call</span>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle} style={{ backgroundColor: "#FFCB3D", color: 'black' }}>
              Subscribe to SMS & Mobile Call, Email & Mailing to receive updates about your membership
            </Tooltip>
            <input type="checkbox" id="toggleAll" />
            <label htmlFor="toggleAll"></label>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div className="switch">
            <span style={{ marginRight: "10px" }}>Emailing</span>
            <input type="checkbox" id="toggleEmailing" />
            <label htmlFor="toggleEmailing"></label>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div className="switch">
            <span style={{ marginRight: "10px" }}>Mailing</span>
            <input type="checkbox" id="toggleMailing" />
            <label htmlFor="toggleMailing"></label>
          </div>
        </Col>
      </div>

      <Col xs={12} md={12} className="mt-5">
        <Label
          check
          className="mb-4 text-lg font-light"
        >
          <Input
            type="checkbox"
            className="mr-4"
            style={{
              border: "1px solid #FFCB3D"
            }}
          />{" "}
          I have read and understood the above terms and conditions and hereby
          agree that i will bounded by these conditions
        </Label>
      </Col>
      <Col xs={12} md={12} className="mt-5">
        <Button color="primary" className="px-4 py-2" style={{
          float: "right",
          backgroundColor: "#FFCB3D",
          color: "#000",
          fontWeight: "bold",
          fontSize: "15px",
          borderRadius: "0",
          border: "none"
        }}>
          CREATE CUSTOMER
        </Button>
      </Col>
      <Col xs={12} md={12}>
        <p className="text-lg font-semibold mt-4 mb-4 text-center">
          v1.0.7
        </p>
      </Col>
    </>
  );
};

export default PrivacyNote;
