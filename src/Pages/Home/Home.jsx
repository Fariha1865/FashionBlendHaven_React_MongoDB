import Brands from "./Brands";
import Slider from "./Slider";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Reviews from "./Reviews";
import Subscribe from "./Subscribe";
const Home = () => {
 
    const {isDarkMode} = useContext(AuthContext);

    return (
        <div className={`${isDarkMode ? "bg-black text-white" : "text-black"}`}>
            <div className="flex justify-center mb-2">
            </div>
            <Slider isDarkMode={isDarkMode}></Slider>
            <Brands></Brands>

            <p className="text-3xl font-bold text-center my-5 font-mono">Customer Reviews</p>
            <Reviews></Reviews>
            <Subscribe></Subscribe>


        </div>
    );
};

export default Home;