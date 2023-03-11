import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import Home from "../../Pages/Home/Home/Home";
import IDVideo from "../../Pages/IDVideo/IDVideo";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
import Upload from "../../Pages/Upload/Upload";

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <Main />,
    children: [
      {
        path: `/`,
        element: <Home />,
      },
      {
        path: `/login`,
        element: <LogIn />,
      },
      {
        path: `/signup`,
        element: <SignUp />,
      },
      {
        path: `/upload`,
        element: <Upload />,
      },
      {
        path: `/dashboard`,
        element: <DashBoard />,
      },
      //
      {
        path: `/videos/:id`,
        element: <IDVideo />,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/api/showvideos/${params?.id}`),
      },
    ],
  },
]);
