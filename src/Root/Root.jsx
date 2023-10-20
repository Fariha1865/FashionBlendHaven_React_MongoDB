import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Sun, Moon, Cloud, CloudSnow } from 'react-feather';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Root = () => {

    const { toggleDarkMode, isDarkMode } = useContext(AuthContext);
    return (
        <div className={`font-poppins ${isDarkMode ? "bg-black" : "bg-blue-50"}`}>
            <div className="flex justify-end">
                <button
                    onClick={toggleDarkMode}
                    className={`rounded-full p-2 absolute top-20 mr-10  z-10 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-500'
                        } flex items-center justify-center`}
                    style={{ width: '4rem', height: '4rem' }}
                >
                    {isDarkMode ? <Moon className="h-6 w-6 text-white" /> : <Sun className="h-6 w-6 text-yellow-400" />}
                    <Cloud className={`h-6 w-6 text-gray-200 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} />
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