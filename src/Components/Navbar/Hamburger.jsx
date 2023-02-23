import { Link } from "react-router-dom"
function Hamburger() {
    return (
        <>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-12 sm:h-12 lg:w-6 lg:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact sm:text-6xl font-semibold dropdown-content mt-10 p-5 bg-gray-200 shadow rounded-box w-80">
                    <li><Link to="/" className=" py-5  sm:text-5xl lg:text-xl">Home</Link></li>
                    <li><Link to="contact" className="py-5 sm:text-5xl lg:text-xl">contact</Link></li>
                    <li><Link to="/about" className="py-5 sm:text-5xl lg:text-xl">about</Link></li>
                    <li><Link to="/Products" className="py-5 sm:text-5xl lg:text-xl">Products</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Hamburger