import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Networks } from "./pages/networks";
import { Login } from "./pages/login";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path: '/admin',
    element: 
      <Private>
        <Admin/>
      </Private>
  },
  {
    path:'/admin/social',
    element: 
      <Private>
        <Networks/>
      </Private>
  }

])

export {router};