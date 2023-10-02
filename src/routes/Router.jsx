import Blogs from "./Blogs";
import Root from "./Root";
import RepoList from "./RepoList";
import Home from "./Home";
import { RouterProvider ,createBrowserRouter} from "react-router-dom";


const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "repos/:lang",
              element: <RepoList />,
            },
            {
              path: "/blogs/",
              element: <Blogs />,
            },
          ],
        },
      ]);
  return <RouterProvider router={router} />
}

export default Router