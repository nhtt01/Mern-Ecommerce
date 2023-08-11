import { Checkbox, Col, Rate, Row } from "antd";
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

      case "CheckBox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onChange={onChange}
          >
            {option.map((item) => {
              return (
                <Checkbox key={item} value={item.value}>
                  {item.name}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
        case "Star":
          return (
          <div 
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}>
              {option.map((item) => {
                return (
                  <Rate disabled defaultValue={item} />

                );
              })}
              </div>
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
          {
            value: "B",
            name: "B",
          },
        ])}
      </div>
      <div className="Star">
        {renderContent("Star",[ 5,4,3])}
      </div>
    </div>
  );
};

export default Navbar;
