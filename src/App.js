import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Photo from "./Photo";
import Payment from "./Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Photo/>,
  },
  {
    path: "/payment",
    element: <Payment/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
