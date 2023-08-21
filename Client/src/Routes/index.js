import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Order from "../pages/Order"
import ProductDetailPage from "../pages/ProductDetail"
import Products from "../pages/Products"
import TypeProduct from "../pages/TypeProduct"

export const routes = [
    {
        path: '/',
        page: Home,
        IsShowHeader:true,
    },
    {
        path: '/products',
        page: Products,
        IsShowHeader:true,

    },
    {
        path: '/order',
        page: Order,
        IsShowHeader:true,

    },
    {
        path: '/product-detail',
        page: ProductDetailPage,
        IsShowHeader:true,

    },
    {
        path: '/:type',
        page: TypeProduct,
        IsShowHeader:true,

    },
    
    {
        path: '/*',
        page: NotFound
    },
]