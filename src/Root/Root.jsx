import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Sun, Moon, CloudSnow } from 'react-feather';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Root = () => {

    const { toggleDarkMode, isDarkMode } = useContext(AuthContext);
    return (
        <div className={`font-poppins ${isDarkMode ? "bg-black" : "bg-blue-50"}`}>
            <div className="flex items-center justify-around">
                <button
                    onClick={toggleDarkMode}
                    className={`rounded-full p-2 absolute top-6 lg:ml-96 md:ml-44 ml-80  z-10 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-500'
                        } flex items-center justify-center`}
                    style={{ width: '3rem', height: '3rem' }}
                >
                    {isDarkMode ? <Moon className="h-7 w-7 text-white" /> : <Sun className="h-8 w-8 text-yellow-100" />}
                    <CloudSnow className={`h-6 w-6 text-blue-400 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} />
                    
                </button>
                
            </div>


            <Navbar></Navbar>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div >
    );
};

export default Root;