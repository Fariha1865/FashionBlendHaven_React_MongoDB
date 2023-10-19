import PropTypes from 'prop-types';
const BrandProduct = ({ brandProduct }) => {

    const { _id, photo, name, type, price, rating, brand } = brandProduct;
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
                        <button className="btn btn-primary">Buy Now</button>
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