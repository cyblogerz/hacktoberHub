
import React from 'react'
import ReactDOM from 'react-dom/client'

import Root from './routes/root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import RepoList from './routes/repoList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[{
      path : '/',
      element: <Home />
    },{
      path:"repos/:lang",
      element:<RepoList />
    }
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
