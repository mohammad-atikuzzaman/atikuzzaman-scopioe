import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Protected from "./Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <App></App>
      </Protected>
    ),
    children: [
      {
        path:"/listing",
        element:<div>This is listiingg</div>
      }
    ],
  },
  {
    path: "/createaccount",
    element: <CreateAccount></CreateAccount>,
  },
  {
    path: "/login",
    element: <Login> </Login>,
  },
]);

export default router;
