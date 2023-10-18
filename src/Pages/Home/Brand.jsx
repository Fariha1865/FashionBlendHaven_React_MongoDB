import AOS from 'aos';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Brand = ({ brand }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const navigate = useNavigate();

    const handleBrandProductsPageNavigation = ()=>{
         navigate(`/brand/${brand.name}`)
    }
    return (
        <div>
            <div
                className="card"
                data-aos="flip-left"

            >
            <div onClick={handleBrandProductsPageNavigation} className="shadow-lg shadow-slate-400 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer relative grid  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`} style={{
                    backgroundImage: `url(${brand.photo})`, // Set the background image using inline style
                }}>
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative flex items-center py-32">
                    <h2 className="mb-6 block font-sans text-4xl font-medium  text-white">
                        {brand.name}
                    </h2>

                </div>
            </div>
            </div>
        </div>

    );
};

Brand.propTypes={
    brand: PropTypes.object.isRequired
}

export default Brand;