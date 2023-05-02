import { useContext } from "react";
import { FaConciergeBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { userProfile, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="container mx-auto navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"} className="text-lg font-bold">
                  Home
                </Link>
              </li>

              <li>
                <Link to={`/blog`} className="text-lg font-bold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <p className="md:text-2xl md:pr-2 text-gray-600">
              <FaConciergeBell></FaConciergeBell>
            </p>
            <a className="btn btn-ghost normal-case md:text-xl">Cooking Chef</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"} className="text-lg font-bold">
                Home
              </Link>
            </li>

            <li>
              <Link to={`/blog`} className="text-lg font-bold">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        {userProfile ? (
          <div className="flex md:gap-5 navbar-end">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={userProfile.photoURL} />
              </div>
            </div>
            <div className="">
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to={`/login`} className="navbar-end">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
