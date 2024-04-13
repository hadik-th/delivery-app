import Home from './ui/Home';
import Menu,{loader as menuLoader} from './features/Menu/Menu';
//loader is being named export and renamed at same time
import Cart from './features/cart/Cart';
import Error from './ui/Error';
import CreateOrder,{action as createOrderAction} from './features/order/CreateOrder';
import Order,{loader as orderLoader} from './features/order/Order';

import './App.css';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
//----------------------------------------------------

// this is imperative way of writting routes, than traditional way which is declarative of writting.
// so the below ethod is neccessary if want to achieve data-loading/fetching with react-router.this can be used to submit data using forms, which cannot be enabled via traditional method.

//home,menu,cart are pages routes.
//applayout is main layout route.
//root level error handle, which will bubble upto Applayout if any error occurs in nested routes/element
//error element is also usied inside menu comp b/c when error occurs in menu comp, whole page will not changed with error page, only menu content will be replaced with error component.

//we are using Error on parent and child comp, since in child comp error will be in the same page if error occured on that comp.

const router = createBrowserRouter([
  {element:<AppLayout/>,
  errorElement:<Error/>,
children:[
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/menu',
    element:<Menu/>,
    loader:menuLoader,
    errorElement:<Error/>
  },
  {
    path:'/cart',element:<Cart/>
  },
  {path:'/order/new',element:<CreateOrder/>,
action:createOrderAction},
  {path:'/order/:orderId',element:<Order/>,
   loader:orderLoader,
   errorElement:<Error/>}  
]}
])

function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
