import { Image } from 'antd';
import React, { useRef, useState } from 'react';
import imageProduct  from '../../assets/images/Products/Iphone14Detail.jpg'
export default function ProductDetailComponent() {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <Image src={imageProduct} alt='Product Detail' preview/>
        </div>
        <div className='col-8'></div>
      </div>
    </div>
  );
}


