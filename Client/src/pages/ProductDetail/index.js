import React from 'react'
import ProductDetailComponent from '../../components/ProductDetail'

const ProductDetailPage = () => {
  return (
    <div style={{background:"#efefef"}}>
    <div className='container'>
        <h1>Trang chủ</h1>
        <ProductDetailComponent/>
    </div>
    </div>
  )
}

export default ProductDetailPage