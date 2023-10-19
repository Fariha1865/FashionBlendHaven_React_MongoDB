import { Link, NavLink } from "react-router-dom";
import profileIcon from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/logo.png"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error.message))
    }
    console.log(user?.photoURL)

    const navLinks = <>


        <div className="flex gap-5 lg:gap-10 md:text-black text-black lg:text-black font-bold  flex-col lg:flex-row items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addProducts">Add Product</NavLink>
            <NavLink to="/card">My Cart</NavLink>
            {/* <NavLink to="/about">About Us</NavLink> */}
        </div>
    </>
    return (
        <div className="text-black">
            <div className="navbar flex flex-col-reverse md:flex-row gap-10 md:gap-0">
                <div className="navbar-start">
                    <div className="dropdown  z-10">
                        <label tabIndex={0} className="btn hidden md:block lg:hidden mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* <h1 className="text-white font-mono text-xl font-bold bg-blue-900 p-2 rounded-md italic">FashionBlendHaven</h1> */}
                    <img src={logo} className="w-96"></img>
                </div>
                <div className="navbar-center block md:hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-1">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL ? <img src={user?.photoURL} /> : <img src={profileIcon} />
                                
                                
                            }

                        </div>

                    </label>
                    {
                        user?.displayName ? <h1 className="text-black mr-3">{user?.displayName}</h1> : "" 
                    }


                    {
                        user ? <button onClick={handleLogout} className="btn bg-blue-900 hover:bg-blue-600 text-white">Sign Out</button> : <div><Link to="/login" className="btn bg-blue-900 hover:bg-blue-600 text-white">Login</Link> <Link to="/register" className="btn bg-blue-900 hover:bg-blue-600 text-white">Register</Link></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;