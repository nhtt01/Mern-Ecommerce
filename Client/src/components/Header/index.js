import React from "react";
import { Col } from "antd";
import { WapperHeader, WapperItem, WapperRight, WapperTextHeader } from "./style";
import Search from "antd/es/input/Search";
import { UserOutlined,CaretDownOutlined,ShoppingCartOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <WapperHeader>
      <Col span={6}>
        <WapperTextHeader>TanTai</WapperTextHeader>
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
      <Col span={6} style={{paddingLeft: "12px"}}>
        <WapperRight>
        <WapperItem>
          <UserOutlined  style={{fontSize:'24px'}}/>
          <div className="waperLogin">
            <div className="LoginLogout">
              <span>Đăng Nhập</span>/<span>Đăng Ký</span>
            </div>
            <span>Tài Khoản</span>
            <CaretDownOutlined />
          </div>
        </WapperItem>
        <WapperItem>
        <ShoppingCartOutlined style={{fontSize:'24px'}}/>
        <span>Giỏ hàng</span>
        </WapperItem>
        </WapperRight>
      </Col>
    </WapperHeader>
  );
};

export default Header;
