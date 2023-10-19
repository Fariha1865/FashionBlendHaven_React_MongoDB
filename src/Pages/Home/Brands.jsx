
import { useEffect, useState } from 'react';
import Brand from './brand';
const Brands = () => {

    const [brands, setBrands] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/brands')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBrands(data);

            })
    }, []);

    return (
        <div className='max-w-6xl mx-auto mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10'>
                {
                    brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>
        </div>

    );
};

export default Brands;