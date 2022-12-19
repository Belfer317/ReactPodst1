import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Books from "./Views/Books/Books";
import CDs from "./Views/CDs/CDs";
import "./styles.css";
import Home from "./Views/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "books",
    element: <Books />
  },
  {
    path: "cds",
    element: <CDs />
  }
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
