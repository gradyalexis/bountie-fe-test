import axios from "axios";
import * as React from "react";
import { Col, Input, Label } from "reactstrap";

interface IFormAddressProps {}

const FormAddress: React.FunctionComponent<IFormAddressProps> = (props) => {
  // call the option from api using axios
  // url : https://restcountries.com/v2/all

  const [country, setCountry] = React.useState("");

  const url = "https://restcountries.com/v2/all";

  // call axios typescript
  const getCountryName = async () => {
    const response: any = await axios.get(url);
    const countryName = response.data.map((item: any) => {
      return item.name;
    });
    setCountry(countryName);
  };

  React.useEffect(() => {
    getCountryName();
  }, []);

  const haha: any = country;
  const renderCountryName = () => {
    if (haha instanceof Array) {
      return haha.map((item: any, index: number) => {
        return <option key={index}>{item}</option>;
      });
    }
  };

  return (
    <>
      <p className="text-xl font-semibold">
        Address
      </p>
      <Col xs={12} md={12} className="mb-4">
        <Label>Address</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        <Input type="text" placeholder="Address" />
      </Col>

      <Col xs={12} md={6} className="mb-4">
        <Label>Country/Location</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        <Input type="select" placeholder="Last name">
          {renderCountryName()}
        </Input>
      </Col>
      <Col xs={12} md={6}>
        <Label>Province/District</Label>
        <span className="text-xl font-semibold text-red-500">
          {" "}
          *
        </span>
        <Input type="text" placeholder="Province/District" />
      </Col>
    </>
  );
};

export default FormAddress;
