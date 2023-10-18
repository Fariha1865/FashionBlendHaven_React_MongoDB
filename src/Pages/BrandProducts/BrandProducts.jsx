import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {

    const {brandName} = useParams();
    const [brandProducts,setBrandProducts] = useState([]);
    console.log(`http://localhost:5000/brand/${brandName}`)

    useEffect(() => {
        fetch(`http://localhost:5000/brand/${brandName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBrandProducts(data);
               

            })

    }, [brandName]);


    return (
        <div>
          <div>
              {
                
                brandProducts.map(brandProduct=><BrandProduct key={brandProduct._id} brandProduct={brandProduct}></BrandProduct>)
              }
          </div>
        </div>
    );
};

export default BrandProducts;