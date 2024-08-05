import { Outlet } from "react-router-dom";
import Nav from "./component/Nav";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="font-Poppins max-w-[1440px] mx-auto">
      <div className="flex">
        <Nav></Nav>
        <div className="w-full bg-[#eef2f5]">
          <UserProfile></UserProfile>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
