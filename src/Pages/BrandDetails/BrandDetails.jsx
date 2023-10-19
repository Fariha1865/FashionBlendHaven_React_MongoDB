import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrandDetails = () => {
    const [productDetails, setProductDetails] = useState([]);
    const { productId } = useParams();
    console.log(productId)
    useEffect(() => {


        window.scrollTo(0, 0);
        fetch(`http://localhost:5000/productDetails/${productId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProductDetails(data);


            })



    }, [productId]);

    return (
        <div className="p-20 max-w-7xl mx-auto">
            <img src={productDetails[0]?.photo} alt="" className="w-[1200px] h-[500px]" />

            <div>
                <h1 className="text-2xl font-bold my-5">Description:</h1>
                <p>{productDetails[0]?.description}</p>
                <p className="text-xl font-semibold mt-5">Price: {productDetails[0]?.price}</p>

                <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            className={`h-5 w-5 fill-current ${star <= parseInt(productDetails[0]?.rating) ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 1l2.4 6.5h6.1l-5 4.7 1.9 6.7L10 14l-4.4 4.9 1.9-6.7-5-4.7H7.6z"
                            />
                        </svg>
                    ))}
                </div>
                In this code, we directly use the num variable to determine how many stars should be filled. The map function generates the stars from 1 to 5, and the class text-yellow-400 is applied to stars with indices less than or equal to num, making them filled stars. The text-gray-300 class is applied to stars with indices greater than num, making them empty stars.

                By passing the appropriate value of num from elsewhere in your code, you can dynamically display the specified number of filled stars for your product rating.







            </div>
            <div className="mt-5">
                <button className="btn bg-blue-900 hover:bg-blue-600 text-white">Add To Cart</button>
            </div>
        </div>
    );
};

export default BrandDetails;