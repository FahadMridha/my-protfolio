import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../home/aboutMe/AboutMe";
import Blog from "../home/blog/Blog";
import ContactUs from "../home/ContactUs/ContactUs";
import Home from "../home/home/Home";
import ProjectDetailes from "../home/projects/ProjectDetailes";
import Projects from "../home/projects/Projects";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetailes />,
        loader: ({ params }) =>
          fetch(
            `https://my-protfolio-server-ruddy.vercel.app/projects/${params.id}`
          ),
      },
    ],
  },
]);
