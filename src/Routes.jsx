import { createBrowserRouter} from "react-router-dom";
import App from "./App";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Protected from "./Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Protected> <div>Home page</div></Protected>
      },
      {
        path:"/createaccount",
        element: <CreateAccount></CreateAccount>,
      },
      {
        path:"/login",
        element: <Login>  </Login>
      }
    ]
  },
])


export default router;
