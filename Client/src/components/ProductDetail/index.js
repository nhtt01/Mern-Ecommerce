import { Image, } from 'antd';
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import React, { useRef, useState } from 'react';
import imageProduct  from '../../assets/images/Products/Iphone14Detail.jpg';
import imageProductSmall  from '../../assets/images/Products/SmallProduct.webp';
import { WapperProductsmall } from './style';
export default function ProductDetailComponent() {

  return (
    <div className="container">
      <div className="row" style={{ padding: "16px" }}>
        <div className="col-4">
          <Image src={imageProduct} alt="Product Detail" preview={false} />
          <WapperProductsmall>
            <Image
              src={imageProductSmall}
              alt="Product Small"
              preview={false}
            />
            <Image
              src={imageProductSmall}
              alt="Product Small"
              preview={false}
            />
            <Image
              src={imageProductSmall}
              alt="Product Small"
              preview={false}
            />
            <Image
              src={imageProductSmall}
              alt="Product Small"
              preview={false}
            />
          </WapperProductsmall>
        </div>
        <div className="col-8">
          <span>
            Thương hiệu: <strong> Apple </strong>
          </span>
          <h2>Apple iPhone 13</h2>
          <div>
            <div className="listStar">
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </div>
            <div className="viewReview">
              <span>(Xem 1765 đánh giá)</span>
            </div>
            <div className="totalSold">
              <span>Đã bán 5000+</span>
            </div>
          </div>
          <div className="price">
            <span className="priceSale">16.090.000 ₫</span>
            <span className="priceDefault">24.990.000 ₫</span>
            <span className="discount">-36%</span>
          </div>
          <div className="address">
            <span>Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh</span> -{" "}
            <button>Đổi địa chỉ</button>
          </div>
          <div className=" warpTotalBuy">
            <div className="totalBuy">
              <PlusOutlined />
              <input type="number"  value={1}/>
              <MinusOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


