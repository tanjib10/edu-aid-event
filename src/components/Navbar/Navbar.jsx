import userDefault from "../../assets/user.png";
import { MdOutlineCastForEducation } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="mr-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/register">Register Now</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar items-center bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-fuchsia-300 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="text-[#9C0063] btn btn-ghost font-bold text-3xl"
        >
          <MdOutlineCastForEducation></MdOutlineCastForEducation> Edu-Aid
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <img className="w-8" src={userDefault} alt="" />
        <Link to="/login">
          <button className="text-xl font-semibold btn btn-ghost text-[#9C0063]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
