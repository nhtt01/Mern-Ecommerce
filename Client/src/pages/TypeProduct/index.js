import React from 'react'
import Navbar from '../../components/Navbar'
import Product from '../../components/Product/Product';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListProduct from '../../components/Product/ListProduct';
const TypeProduct = () => {
  return (
    <div className="container">
      <div className="row" style={{ padding: "10px" }}>
        <div className="col-3">
          <Navbar />
        </div>
        <div className="col-9">
          <Row className="ListProducts mt-3">
            <ListProduct />
          </Row>
        </div>
      </div>
    </div>
  );
}

export default TypeProduct