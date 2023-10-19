import { useState } from "react";
import Brands from "./Brands";
import Slider from "./Slider";
import { Sun, Moon, Cloud, CloudSnow } from 'react-feather';
const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

    };

    return (
        <div className={`${isDarkMode ? "bg-black" : ""}`}>
            <div className="flex justify-center mb-2">
                <button
                    onClick={toggleDarkMode}
                    className={`rounded-full p-2 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-500'
                        } flex items-center justify-center`}
                    style={{ width: '4rem', height: '4rem' }}
                >
                    {isDarkMode ? <Moon className="h-6 w-6 text-white" /> : <Sun className="h-6 w-6 text-yellow-400" />}
                    <Cloud className={`h-6 w-6 text-gray-200 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} />
                    <CloudSnow className={`h-6 w-6 text-blue-400 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} />
                </button>
            </div>
            <Slider isDarkMode={isDarkMode}></Slider>
            <Brands></Brands>
        </div>
    );
};

export default Home;