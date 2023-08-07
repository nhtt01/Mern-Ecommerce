import React from "react";
import { styled } from "styled-components";
import Slider from "../../components/Slider";
import TypeProducts from "../../components/TypeProducts";
import CardProduct from "../../components/Card";

const Home = () => {
  const arr = ["TV", "Laptop", "Điện thoại", "Tai nghe", "Loa"];
  return (
    <div style={{ padding: "0 120px" }}>
      <TypeProductst>
        {arr.map((item) => {
          return <TypeProducts name={item} key={item} />;
        })}
      </TypeProductst>
       <Slider/>
       <CardProduct/>
      <div>Home</div>
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
