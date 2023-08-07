import { Checkbox, Col, Row } from "antd";
import React from "react";
import "./style.css";
const Navbar = () => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const renderContent = (type, option) => {
    switch (type) {
      case "text":
        return option.map((item) => {
          return <li key={item}>{item}</li>;
        });

      case "checkBox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
            }}
            onChange={onChange}
          >
            {option.map((item) => {
              return (<Checkbox key={item} value={item.value}>{item.name}</Checkbox>)
            })}
          </Checkbox.Group>
        );
      default:
        return {};
    }
  };
  return (
    <div className="Navbar">
      Navbar
      <div className="ListProducts">
        <ul>
          {renderContent("text", [
            "Điện thoại",
            "Laptop",
            "Tai nghe",
            "Chuột",
            "Bàn phím",
          ])}
        </ul>
      </div>
      <div className="CheckBox">
        {renderContent("CheckBox", [
          {
            value: "A",
            name: "A",
          },
        ])}
      </div>
    </div>
  );
};

export default Navbar;
