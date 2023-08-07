import React from "react";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import AsusVivobook from "../../assets/images/Products/asus-vivobook.jpg";
import Iphone12Tim from "../../assets/images/Products/iphone-12-tim-1-600x600.jpg";
// import Iphone12Trang  from "../../assets/images/Products/iphone-12-trang-600x600.jpg";

const CardProduct = () => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 183 }}
        bodyStyle={{ padding: "10px" }}
        cover={
          <img
            alt="Iphone 12 Tím"
            style={{ width: "100%", height: "183px" }}
            src={Iphone12Tim}
          />
        }
      >
        <h3>Apple iPhone 14 Pro</h3>
        <div>
          <span>4.5</span> <StarFilled /> | <span>Đã bán 1000+</span>
        </div>
        <div>1.000.000đ</div>
      </Card>
    </>
  );
};

export default CardProduct;
