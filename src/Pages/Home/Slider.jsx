import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import leftCardOne from "../../assets/1.jpg";
import leftCardTwo from "../../assets/2.jpg";
import leftCardThree from "../../assets/3.jpg";
import leftCardFour from "../../assets/4.jpg";
import leftCardFive from "../../assets/5.jpg";
import { GiRunningShoe,GiAmpleDress } from 'react-icons/gi';
import { BsFillHandbagFill, BsSunglasses } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import leftCardSix from "../../assets/6.jpg";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const sliderItems = [
  {
    src: leftCardThree,
    text: "Indulge in Luxury: Explore Our Exclusive Collection of Premium Brands",
  },
  {
    src: leftCardTwo,
    text: "Luxury Within Reach: Enjoy Exclusive Discounts on Designer Fashion.",
  },
  {
    src: leftCardOne,
    text: "Authenticity Guaranteed: Shop with Confidence for Genuine Products.",
  },
  {
    src: leftCardFour,
    text: "Diverse Elegance: Find a World of Style in Our Varied Selection.",
  },
  {
    src: leftCardFive,
    text: "Elevate Your Wardrobe: Discover the Epitome of Luxury Fashion.",
  },
  {
    src: leftCardSix,
    text: "Luxury Redefined: Where Variety, Authenticity, and Savings Meet.",
  },
];

const Slider = () => {
  
  return (
    <div className='bg-blue-100'>
      <AutoplaySlider className='h-[500px] mt-20 lg:mt-0 ' play cancelOnInteraction={false} interval={600}>
        {sliderItems.map((item, index) => (
          <div key={index}>
            <div className='flex bg-blue-100'>
              <div className='w-1/2'>
                <img src={item.src} alt={item.text} className='w-[700px] h-[500px]' />
              </div>
              <div className='w-1/2 flex items-center p-5'>
                <div className='rounded-md p-2'>
                  <div className='flex justify-center mb-6 text-blue-500'>
                  <GiRunningShoe className='mr-6'/>
                  <BsFillHandbagFill className='mr-6'/>
                  <GiAmpleDress className='mr-6'/>
                  <FaTshirt className='mr-6'/>
                  <BsSunglasses className='mr-6'/>
                  </div>
                  <p className="text-2xl font-extrabold uppercase tracking-wide leading-tight text-blue-600 drop-shadow-xl">{item.text}</p>
                  <div className='flex justify-center mt-6 text-blue-900'>
                  <GiRunningShoe className='mr-6'/>
                  <BsFillHandbagFill className='mr-6'/>
                  <GiAmpleDress className='mr-6'/>
                  <FaTshirt className='mr-6'/>
                  <BsSunglasses className='mr-6'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
