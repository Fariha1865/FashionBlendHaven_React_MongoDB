import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



const BrandProduct = ({ brandProduct }) => {

    const navigate = useNavigate();


    const { _id, photo, name, type, price, rating, brand } = brandProduct;
    const handleDetails = () => {
        navigate(`/productDetails/${_id}`)
    }
    const handleUpdate = () => {
        navigate(`/updateProducts/${_id}`)
    }

    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl">
                <img src={photo} alt="product" className='h-56' />
                <div className="card-body h-auto">
                    <h2 className="card-title h-20">{name}</h2>
                    <div className='h-36 mb-2'>
                        <div className='flex justify-between text-gray-500 font-semibold text-lg'>
                            <p>{type}</p>
                            <p>Brand: {brand}</p>
                        </div>
                        <p className='text-blue-800 font-bold text-lg mt-3'>Price: {price}</p>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className={`h-7 w-6 fill-current ${star <= parseInt(rating) ? 'text-orange-500' : 'text-gray-300'
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
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={handleDetails} className="btn btn-primary">Details</button>
                        <button onClick={handleUpdate} className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

BrandProduct.propTypes = {
    brandProduct: PropTypes.object.isRequired
}
export default BrandProduct;