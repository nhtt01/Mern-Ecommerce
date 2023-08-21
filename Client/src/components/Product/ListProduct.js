import React from "react";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useParams } from 'react-router-dom'; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
const ListProduct = ({colsValue}) => {
  
  const colValue = colsValue =='home' ? 2 : 3;
  return (
  <>
        <div md={2} className={`mb-3 col-${colValue}` } >
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
        <div md={2} className={`mb-3 col-${colValue}` }>
          <Product />
        </div>
  </>
  )
}

export default ListProduct