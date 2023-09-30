
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import RepoList from './routes/RepoList';
import Blogs from './routes/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
      path : '/',
      element: <Home />
    },
    {
      path:"repos/:lang",
      element:<RepoList />
    },
    {
      path: "/blogs/",
    element: <Blogs/>,

    }
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
