import Brands from "./Brands";
import Slider from "./Slider";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Home = () => {
 
    const {isDarkMode} = useContext(AuthContext);

    return (
        <div className={`${isDarkMode ? "bg-black" : ""}`}>
            <div className="flex justify-center mb-2">
            </div>
            <Slider isDarkMode={isDarkMode}></Slider>
            <Brands></Brands>
        </div>
    );
};

export default Home;