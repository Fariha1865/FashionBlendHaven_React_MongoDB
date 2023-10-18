import PropTypes from 'prop-types';
const BrandProduct = ({ brandProduct }) => {

    const { _id, Image, Name, Type, Price, Rating, BrandName } = brandProduct;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={Image} alt="product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
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