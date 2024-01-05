import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost font-bold  text-3xl">pti.</a>
        </div>
        <div className="flex-none gap-2">
          <div className="flex justify-center items-center gap-10 lg:mr-52">
            <div className=" flex input input-bordered  ">
              <div className="flex justify-center items-center mr-3">
                <FiSearch />
              </div>
              <input
                type="text"
                placeholder="Search Audiobook"
                className="lg:w-96 w-28"
              />
            </div>
            <select className="select select-bordered font-bold w-full max-w-xs">
              <option selected>Menu</option>
              <option>Home</option>
              <option>Category</option>
              <option>My Favorites</option>
              <option>Profile</option>
              <option>Login/Sign Up</option>
            </select>
          </div>
          <div className="dropdown dropdown-end hidden lg:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle  avatar"
            >
              <div className="w-10  rounded-full">
                <img
                  alt="Tailwind CSS Navbar component "
                  src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
