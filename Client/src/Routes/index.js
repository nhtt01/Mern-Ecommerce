import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Order from "../pages/Order"
import Products from "../pages/Products"

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
        path: '/*',
        page: NotFound
    },
]