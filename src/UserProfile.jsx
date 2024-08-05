import { useContext } from "react";
import { MyContext } from "./contexts/ContextComponent";
import { IoIosNotificationsOutline } from "react-icons/io";

const UserProfile = () => {
  const { user } = useContext(MyContext);
  console.log(user);
  return (
    <div className="flex items-center justify-between bg-white p-6 ml-1">
      <div className="flex items-center">
        <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <h3 className="font-medium">{user?.displayName}</h3>
          <h4 className="text-sm">{user?.email}</h4>
        </div>
      </div>
      <div className="flex items-center gap-4 ">
        <button className="border-r-2 pr-4">
          <IoIosNotificationsOutline className="text-3xl border-2 rounded-full font-bold p-[2px]" />
        </button>
        <button className="flex items-center gap-4">
          <span className="text-[#F15E4A] font-medium"> Log Out</span>
          <img
            src="logout.svg"
            alt=""
            className="bg-[#FFECEA] p-2 rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
