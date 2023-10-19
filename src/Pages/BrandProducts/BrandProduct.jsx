import PropTypes from 'prop-types';
const BrandProduct = ({ brandProduct }) => {

    const { _id, Image, Name, Type, Price, Rating, BrandName } = brandProduct;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <img src={Image} alt="product" className='h-52'/>
                <div className="card-body h-64">
                    <h2 className="card-title h-20">{Name}</h2>
                    <p>{BrandName}</p>
                    <p>{Type}</p>
                    <p>{Price}</p>
                    <p>{Rating}</p>
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