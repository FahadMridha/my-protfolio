import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Children } from "react";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-purple-600">
      <RouterProvider router={router}>{Children}</RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
