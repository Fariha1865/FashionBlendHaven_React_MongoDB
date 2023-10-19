import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



const BrandProduct = ({ brandProduct }) => {

    const navigate = useNavigate();


    const { _id, photo, name, type, price, rating, brand } = brandProduct;
    const handleDetails = ()=>{
        navigate(`/productDetails/${_id}`)
    }
    
    return (
        <div>
          
            <div className="card card-compact bg-base-100 shadow-xl">
                <img src={photo} alt="product" className='h-52'/>
                <div className="card-body h-64">
                    <h2 className="card-title h-20">{name}</h2>
                    <p>{brand}</p>
                    <p>{type}</p>
                    <p>{price}</p>
                    <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            className={`h-5 w-5 fill-current ${star <= parseInt(rating) ? 'text-yellow-400' : 'text-gray-300'
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
                    <div className="card-actions justify-end">
                        <button onClick={handleDetails} className="btn btn-primary">Details</button>
                        <button className="btn btn-primary">Update</button>
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