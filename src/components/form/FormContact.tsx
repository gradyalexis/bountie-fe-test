import * as React from "react";
import { Col, Input, Label } from "reactstrap";

interface FormContactType {}

const FormContact: React.FunctionComponent<FormContactType> = (props) => {
  const year = new Date().getFullYear();

  const renderDayOptions = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return days;
  };

  const renderMonthOptions = () => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return months;
  };

  const renderYearOptions = () => {
    const years = [];
    for (let i = year; i >= 1900; i--) {
      years.push(i);
    }
    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };


  return (
    <>
      <p className="text-xl font-semibold">
        Contact
      </p>
      <Col xs={12} md={6} className="mb-4">
        <Label>Email Address</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        <Input type="text" placeholder="Email Address" />
      </Col>
      <Col xs={12} md={2} className="mb-4">
        <Label>Date of birth</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        {/* only date */}
        <Input type="select" placeholder="Date of birth">
          {renderDayOptions()}
        </Input>
      </Col>
      <Col xs={12} md={2} className="mb-4">
        <Label>Month</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        <Input type="select" placeholder="Month">
          {renderMonthOptions()}
        </Input>
      </Col>
      <Col xs={12} md={2} className="mb-4">
        <Label>Year</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        {/* input only year */}
        <Input type="select" placeholder="Year">
          {renderYearOptions()}
        </Input>
      </Col>
    </>
  );
};

export default FormContact;
