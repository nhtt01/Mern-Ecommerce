import React from "react";
import { styled } from "styled-components";
import Slider from "../../components/Slider";
import TypeProducts from "../../components/TypeProducts";
import CardProduct from "../../components/Card";
import Navbar from "../../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "../../components/Button";
const Home = () => {
  const arr = ["TV", "Laptop", "Điện thoại", "Tai nghe", "Loa"];
  return (
    <div style={{ padding: "0 120px" }}>
      <TypeProductst>
        {arr.map((item) => {
          return <TypeProducts name={item} key={item} />;
        })}
      </TypeProductst>
      <Slider />
      <Row>
        <Col md={2}>
          <CardProduct />
        </Col>
        <Col md={2}>
          <CardProduct />
        </Col>
        <Col md={2}>
          <CardProduct />
        </Col>
        <Col md={2}>
          <CardProduct />
        </Col>
        <Col md={2}>
          <CardProduct />
        </Col>
        <Col md={2}>
          <CardProduct />
        </Col>
        <Col md={2}>
          <CardProduct />
        </Col>
        <Col md={2}>
          <CardProduct />
        </Col>
      </Row>
      <ButtonComponent
        textbutton="Xem Thêm"
        type="outline"
        styleButton={{
          border: "1px solid rgb(11,116,229)",
          color: " rgb(11,116,229)",
          width: "240px",
          height: "38px",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default Home;

const TypeProductst = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid red;
  height: 44px;
`;
