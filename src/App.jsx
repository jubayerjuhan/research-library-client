import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Userpage from "./pages/Userpage/Userpage.jsx";
import Register from "./pages/Register/Register.jsx";
import UserAuthChecker from "./components/AuthChecker/UserAuthChecker.jsx";
import Myresearches from "./pages/MyResearchs/Myresearches.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import PdfViewer from "./pages/PdfViewer/PdfViewer.jsx";
import AddPost from "./pages/AddPost/AddPost.jsx";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register register />,
    },
    {
      path: "/login",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <UserAuthChecker>
          <Homepage />
        </UserAuthChecker>
      ),
      errorElement: <p>404 Not Found</p>,
    },
    {
      path: "/all-research",
      element: (
        <UserAuthChecker>
          <Homepage />
        </UserAuthChecker>
      ),
      errorElement: <p>404 Not Found</p>,
    },
    {
      path: "/my-research",
      element: (
        <UserAuthChecker>
          <Myresearches />
        </UserAuthChecker>
      ),
    },
    {
      path: "/add-research",
      element: (
        <UserAuthChecker>
          <AddPost />
        </UserAuthChecker>
      ),
    },
    {
      path: "/pdf/:id",
      element: (
        <UserAuthChecker>
          <PdfViewer />
        </UserAuthChecker>
      ),
      errorElement: <p>404 Not Found</p>,
    },

    {
      path: "/profile",
      element: (
        <UserAuthChecker>
          <Profile />
        </UserAuthChecker>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
