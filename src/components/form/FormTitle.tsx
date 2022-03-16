import * as React from "react";
import { FormGroup, Input, Label } from "reactstrap";

interface IFormTitleProps {
  value?: string;
}

const FormTitle: React.FunctionComponent<IFormTitleProps> = (props) => {
  const data = ["Mrs", "Ms", "Mdm", "Mr", "Dr"];
  const [value, setValue] = React.useState(null);

  function changeValue(event: any) {
    setValue(event.target.value);
  }

  function renderOptions() {
    return data.map((item, index) => {
      return (
        <Label
          check
          key={index}
          style={{
            marginRight: "2rem",
          }}
          className="mb-4"
        >
          <Input
            type="checkbox"
            onChange={changeValue}
            style={{
              border: "1px solid #FFCB3D",
            }}
            value={item}
            checked={value === item}
          />{" "}
          {item}
        </Label>
      );
    });
  }
  return (
    <>
      <p
        style={{
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Title
      </p>
      <FormGroup check>{renderOptions()}</FormGroup>
    </>
  );
};

export default FormTitle;
