import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {

    const {brandName} = useParams();
    const [brandProducts,setBrandProducts] = useState([]);
    console.log(`https://server-2mfgix9rk-fariha1865s-projects.vercel.app/brand/${brandName}`)

    useEffect(() => {
        fetch(`https://server-2mfgix9rk-fariha1865s-projects.vercel.app/brand/${brandName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBrandProducts(data);
               

            })

    }, [brandName]);


    return (
        <div className='max-w-6xl mx-auto mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10'>
              {
                
                brandProducts.map(brandProduct=><BrandProduct key={brandProduct._id} brandProduct={brandProduct}></BrandProduct>)
              }
          </div>
        </div>
    );
};

export default BrandProducts;