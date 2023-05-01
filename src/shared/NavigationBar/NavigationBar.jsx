import { FaConciergeBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
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
                <a>Home</a>
              </li>
            
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <p className="text-2xl md:pr-2 text-gray-600">
              <FaConciergeBell></FaConciergeBell>
            </p>
            <a className="btn btn-ghost normal-case text-xl">Cooking Chef</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
