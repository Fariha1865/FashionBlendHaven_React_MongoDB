import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";

const CartProducts = () => {

    
    const [cartProducts, setCartProducts] = useState([]);
    console.log(`http://localhost:5000/cart`)

    useEffect(() => {


        window.scrollTo(0, 0);
        fetch('http://localhost:5000/cart')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCartProducts(data);

            })



    }, []);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20">
                {
                    cartProducts.map(cartProduct=><CartProduct key={cartProduct._id} cartProduct={cartProduct}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default CartProducts;