import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="">
      <div className="text-[40px] mt-14 mx-16 text-[#4285F3]">
        <h1>SCOPIOE</h1>
      </div>
      <ul className="mt-10">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex gap-4 p-4 bg-[#D5E9FF] font-medium border-l-4 border-black"
                : "flex gap-4 p-4"
            }>
            <img src="home.svg" alt="" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/listing" className={({isActive})=> isActive? "flex gap-4 p-4 bg-[#D5E9FF] font-medium border-l-4 border-black": "flex gap-4 p-4"}>
            <img src="user.svg" alt="" /> New Listing
          </NavLink>
        </li>
        <li className="flex gap-4 p-4">
          <img src="search.svg" alt="" />
          Search
        </li>
        <li className="flex gap-4 p-4">
          <img src="paper.svg" alt="" />
          About
        </li>
        <li className="flex gap-4 p-4">
          <img src="heart.svg" alt="" /> Favorite
        </li>
        <hr />
        <li>Help Center</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Nav;
