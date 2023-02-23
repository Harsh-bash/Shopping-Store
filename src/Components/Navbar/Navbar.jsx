import Hamburger from "./Hamburger";
import CartLogo from './ViewCart'
import Logo from "./Logo";
import NavbarSmall from "./NavbarSmall";

function Navbar() {
  return (
    <>
      <div className="navbar sm:py-10 lg:py-5 flex justify-between lg:my-0 text-gray-700 px-10">
        <div className="lg:hidden"><Hamburger /></div>
        
        <Logo />
        <CartLogo />
      </div>

      <div className="btn-group flex justify-around sm:px-16 lg:px-60 sm:text-3xl sm:py-12 lg:py-3 lg:text-lg">
        <NavbarSmall />
      </div>
    </>
  )
}



export default Navbar;