import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Books from "./Views/Books/Books";
import CDs from "./Views/CDs/CDs";
import "./styles.css";
import Home from "./Views/Home/Home";
import Ebooks from "./Views/Ebooks/Ebooks";

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
  },
  {
    path: "ebooks",
    element: <Ebooks />
  }
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
