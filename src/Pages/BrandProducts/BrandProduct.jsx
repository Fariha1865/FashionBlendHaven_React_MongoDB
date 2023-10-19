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
                    <p>{rating}</p>
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