import { Image,InputNumber  } from 'antd';
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import React, { useRef, useState } from 'react';
import imageProduct  from '../../assets/images/Products/Iphone14Detail.jpg';
import imageProductSmall  from '../../assets/images/Products/SmallProduct.webp';
import { WapperProductsmall } from './style';
import  './style.scss';
export default function ProductDetailComponent() {
   const  [totalBuy,setTotalBuy] = useState(1)
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
          <span className='brandName'>
            Thương hiệu: <a href='#' className='tag'> Apple </a>
          </span>
          <h1 className='nameProduct'>Apple iPhone 13</h1>
          <div className='warpReview'>
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
            <span className="priceSale">16.090.000₫</span>
            <span className="priceDefault">24.990.000₫</span>
            <span className="discount">-36%</span>
          </div>
          <div className="address">
          <span>Giao đến</span>
            <span> Q. 1, P. Bến Nghé, Hồ Chí Minh</span>
             - 
            <button> Đổi địa chỉ</button>
          </div>
          <hr/>
          <div className=" warpTotalBuy">
          <span>Số lượng</span>
            <div className="totalBuy" style={{display: "flex", alignItems: "center", gap: "8px"}}>
              <PlusOutlined className='PlusOutlined' />
              <InputNumber className='inputValue' min={1} max={10} defaultValue={3}  />
              <MinusOutlined className='MinusOutlined'/>
            </div>
          </div>
          <div className='warpedBuy'>
            <button className='buy btn '>Chọn Mua</button>
            <button className='installmentPayment btn btn-outline-primary'>Trả góp
            <span>1.340.833 ₫/tháng</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


