
import { useEffect, useState } from 'react';
import Brand from './brand';
const Brands = () => {

    const [brands, setBrands] = useState([]);
    useEffect(() => {

        fetch('https://server-odmky03uc-fariha1865s-projects.vercel.app/brands')
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
                    brands?.length>0 ? brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>) : <span className="loading loading-spinner loading-lg lg:ml-96"></span>
                }
            </div>
        </div>

    );
};

export default Brands;