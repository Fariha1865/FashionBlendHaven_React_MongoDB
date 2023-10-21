import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const AutoplaySlider = withAutoplay(AwesomeSlider)
const BrandProducts = () => {

    const { brandName } = useParams();

    const [brandProducts, setBrandProducts] = useState([]);

    const {isDarkMode} = useContext(AuthContext);
    console.log(`https://server-odmky03uc-fariha1865s-projects.vercel.app/brand/${brandName}`)
    
    useEffect(() => {


        window.scrollTo(0, 0);
        fetch(`https://server-odmky03uc-fariha1865s-projects.vercel.app/brand/${brandName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBrandProducts(data);


            })



    }, [brandName]);

    const sliderItems = [
        {
            src: brandProducts[1]?.photo,
            text: "Guaranteed 100% authentic products",
        },
        {
            src: brandProducts[2]?.photo || "",
            text: "Fast delivery across the country",
        },
        {
            src: brandProducts[3]?.photo,
            text: "Best brand products at best prices",
        }
    ];


    return (
        <div className={` mt-10 ${isDarkMode ? "bg-black":"bg-blue-100"}`}>
            {brandProducts?.length > 0 &&
                <AutoplaySlider className={`h-[500px] mt-20 lg:mt-0 w-full autoSlider`}

                    play={true}
                    cancelOnInteraction={false}
                    interval={1000}

                >

                    {sliderItems.map((item, index) => (
                        <div key={index} data-src={item.src} className='flex justify-center items-center ${brandProducts.length >0 ? "": "hidden"}'>
                            <div className='m-5 absolute opacity-70 bg-white rounded-md p-2 z-0'>
                                <p className='z-10 text-3xl text-red-900 font-extrabold  p-2'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </AutoplaySlider>}

            <h1 className={`text-3xl font-bold text-center mt-20 mb-7 border-b-4 border-blue-500 ${isDarkMode ? "text-white": "text-black"}`}>Available Products of {brandName}</h1>
            <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-10'>
                {
                    brandProducts?.length > 0 ? brandProducts.map(brandProduct => <BrandProduct key={brandProduct._id} brandProduct={brandProduct} image1={brandProducts[0].photo}></BrandProduct>) : <img src="https://i.ibb.co/xSczbNY/no-Product-removebg-preview.png" className="lg:ml-[100%]"/>
                }
            </div>

        </div>
    );
};

export default BrandProducts;