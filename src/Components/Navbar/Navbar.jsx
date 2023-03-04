import { Link } from "react-router-dom";
import CartLogo from "./Cartlogo";

function Navbar() {
  return (
    <>
      <marquee behavior="scroll" direction="left" className='text-purple-600'>"This is my react js project . For Source code check out my github account. Link is available in about section"</marquee>
      <div className="navbar bg-base-100 sm:p-10">

        <div className="navbar-start">
          {/* hamburger */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:w-12 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-5 p-2 shadow bg-base-100 rounded-box w-52 sm:w-72 md:w-96">
              <li><Link to="/home" className="text-base sm:text-3xl sm:py-5" >Home</Link></li>
              <li><Link to="/about" className="text-base sm:text-3xl sm:py-5">About</Link></li>
              <li><Link to="/Contact" className="text-base sm:text-3xl sm:py-5">Contact</Link></li>
              <li><Link to="/products" className="text-base sm:text-3xl sm:py-5">Products</Link></li>
            </ul>
          </div>
          <Link to="/home" className="btn btn-ghost font-extrabold text-xl sm:text-4xl lg:text-xl">Shophere</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/products" >Products</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          <CartLogo />
        </div>

      </div>
    </>
  )
}



export default Navbar;