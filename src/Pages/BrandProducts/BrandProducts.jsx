import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BrandProducts = () => {

    const {brandName} = useParams();
    console.log(`http://localhost:5000/brand/${brandName}`)

    useEffect(() => {
        fetch(`http://localhost:5000/brand/${brandName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
    
                // Handle the data here, e.g., update state or render it in your component.
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [brandName]);


    return (
        <div>
            <h1>{brandName}</h1>
        </div>
    );
};

export default BrandProducts;