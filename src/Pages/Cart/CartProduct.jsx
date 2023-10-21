import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const CartProduct = ({ cartProduct,setCart }) => {

    const {_id,photo, name, type, price, rating, brand } = cartProduct;

    const handleDelete = (_id) => {

        // event.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                

                    console.log('deleted', _id),

                    fetch(`https://server-odmky03uc-fariha1865s-projects.vercel.app/product/${_id}`, {

                        method: 'DELETE',

                    })
                        .then(res => res.json())
                        .then(data => {

                            console.log(data)

                            if (data.deletedCount > 0) {
                                setCart(_id);
                                Swal.fire(
                                    'Product Removed!',
                                    'The product has been deleted from your cart',
                                    'success',
                                )
                            }
                        })
                
            }
        })
    }


    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <img src={photo} alt="product" className='h-52' />
                <div className="card-body h-64">
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
                        
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
CartProduct.propTypes = {
    cartProduct: PropTypes.object.isRequired,
    setCart: PropTypes.func
}
export default CartProduct;