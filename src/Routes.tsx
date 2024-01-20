import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Articles from "./containers/article/Articles";
import CreateArticle from "./containers/article/CreateArticle";
import EditArticle from "./containers/article/EditArticle";
import Article from "./containers/article/Article";
import Layout from "./containers/article/Layout";


const router = [
  {
    path:"",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<div>Home Page</div>
      },
      {
        path: "/articles",
        children: [
          {
            path: "",
            element: <Articles />
          },
          {
            path: ":id",
            element: <Article />
          },
          {
            path: "create",
            element: <CreateArticle />
          },
          {
            path: "edit/:id",
            element: <EditArticle />
          }
        ]
      }
    ]
  }
];

const Routes = () => {
  return <RouterProvider router={createBrowserRouter(router)} />;
}

export default Routes;