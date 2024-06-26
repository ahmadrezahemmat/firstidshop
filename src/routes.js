import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Article from "./pages/article/Article";
import Course from "./pages/course/Course";
import Setting from "./pages/setting";
import PrivateRoute from "./components/PrivateRoute";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about/", element: <About /> },
  {
    path: "/article/*",
    element: <Article />,
    children: [
      { path: "php", element: <h2>php</h2> },
      { path: "js", element: <h2>js</h2> },
      { path: "react", element: <h2>react</h2> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/panel", element: <PrivateRoute><Panel/></PrivateRoute> },
  { path: "/setting", element: <PrivateRoute><Setting /></PrivateRoute> },
  { path: "/course/:courseId", element: <Course /> },
];
export default routes;
