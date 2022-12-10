import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Children } from "react";
import { router } from "./routes/Routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}>{Children}</RouterProvider>
    </div>
  );
}

export default App;
