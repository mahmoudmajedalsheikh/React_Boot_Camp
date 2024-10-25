import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './ui/Home';
import Error from './ui/Error';
import Menu,{loader as menuLoader} from './features/menu/Menu';
import Order,{loader as orderLoader} from './features/order/Order';
import CreateOrder,{ action as createOrderAction } from './features/order/CreateOrder';
import Cart from './features/cart/Cart';
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home />,
        errorElement:<Error/>,
      },
      {
        path:'/menu',
        element:<Menu />,
        loader:menuLoader,
        errorElement:<Error/>,
      },
      {
        path:'/cart',
        element:<Cart />,
        errorElement:<Error/>,
      },
      {
        path:'/order/new',
        element:<CreateOrder />,
        errorElement:<Error/>,
        action:createOrderAction,
      },
      {
        path:'/order/:orderId',
        element:<Order />,
        loader:orderLoader,
        errorElement:<Error/>,
      },
    ]
  }
]);



function App() {
  return (
<RouterProvider router={router} />
  )
}

export default App
