import React, { useState } from "react";
import { Col } from "antd";
import {
  WapperHeader,
  WapperItem,
  WapperRight,
  WapperTextHeader,
} from "./style";
import Search from "antd/es/input/Search";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "react-bootstrap";
import LoginForm from "../LoginForm";
import RegisterForm from "../Register";
const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };
  return (
    <WapperHeader>
      <Col span={6}>
        <WapperTextHeader>
          <a href="/" style={{ cursor: "pointer" }}>
            TanTai
          </a>
        </WapperTextHeader>
      </Col>
      <Col span={12}>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          // onSearch={onSearch}
        />
      </Col>
      <Col span={6} style={{ paddingLeft: "12px" }}>
        <WapperRight>
          <WapperItem>
            <UserOutlined style={{ fontSize: "24px" }} />
            <div className="waperLogin">
              <div className="LoginLogout">
                <span style={{cursor:"pointer"}} variant="primary" onClick={handleShowLoginModal}>
                  Đăng Nhập
                </span>
                /
                <span style={{cursor:"pointer"}} variant="primary" onClick={handleShowRegisterModal}>
                  Đăng Ký
                </span>
              </div>
              <span>Tài Khoản</span>
              <CaretDownOutlined />
            </div>
          </WapperItem>
          <WapperItem>
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
            <span>Giỏ hàng</span>
          </WapperItem>
        </WapperRight>
      </Col>
      <div>
        <LoginForm show={showLoginModal} onHide={handleCloseModal} />
        <RegisterForm show={showRegisterModal} onHide={handleCloseModal} />
      </div>
    </WapperHeader>
  );
};

export default Header;
