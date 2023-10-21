import Brands from "./Brands";
import Slider from "./Slider";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Reviews from "./Reviews";
import Subscribe from "./Subscribe";
import './sparkle.css'
const Home = () => {

    const { isDarkMode } = useContext(AuthContext);

    return (
        <div className={`${isDarkMode ? "bg-black text-white" : "text-black"}`}>
            <div className="flex justify-center mb-2">
            </div>
            <Slider isDarkMode={isDarkMode}></Slider>

            <h1 className="glow mt-20 text-gray-500 font-mono">Find products of you favorite brand</h1>
            <Brands></Brands>

            <p className="text-3xl font-bold text-center my-5 font-mono mt-20">Customer Reviews</p>
            <Reviews></Reviews>
            <Subscribe></Subscribe>


        </div>
    );
};

export default Home;