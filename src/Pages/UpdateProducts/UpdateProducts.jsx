import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const UpdateProducts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [previousProduct] = useLoaderData();

    const [updatedProduct, setUpdatedProduct] = useState(previousProduct);
    const handleProductAdd = e => {
        e.preventDefault();


        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const editedProduct = { name, brand, photo, price, type, description, rating }
        // console.log(product);
        fetch(`http://localhost:5000/productUpdate/${updatedProduct._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    alert('Product updated successfully')
                    setUpdatedProduct(editedProduct);
                   

                }
            })

    }
    return (
        <div>

            <div className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover  items-center" style={{ backgroundImage: "url(https://i.ibb.co/ssRhtcR/back.jpg)" }}>
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                    <div className="grid gap-8 grid-cols-1">
                        <div className="flex flex-col">
                            <div className="flex flex-col sm:flex-row items-center">
                                <h2 className="font-semibold text-lg mr-auto">Add a New Product</h2>
                                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                            </div>
                            <div className="mt-5">
                                <form onSubmit={handleProductAdd}>
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2">Product Name<abbr title="required"></abbr></label>
                                            <input name="name" defaultValue={updatedProduct?.name} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" id="integration_shop_name" />
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                        </div>
                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2">Brand Name<abbr title="required"></abbr></label>
                                            <select name="brand" className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full" required="required" id="integration_city_id">
                                                <option value="">Select</option>
                                                <option value="Nike">Nike</option>
                                                <option value="Adidas">Adidas</option>
                                                <option value="Zara">Zara</option>
                                                <option value="Gucci">Gucci</option>
                                                <option value="Levi's">Levi's</option>
                                                <option value="H&M">H&M</option>
                                            </select>
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                        </div>
                                    </div>
                                    <div className="mb-3 space-y-2 w-full text-xs">
                                        <label className=" font-semibold text-gray-600 py-2">Product Image URL</label>
                                        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                            <div className="flex">
                                                <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark  w-12 h-10 bg-blue-300 justify-center  text-xl rounded-lg text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <input defaultValue={updatedProduct?.photo} name="photo" type="text" className="flex-shrink flex-grow leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" />
                                        </div>
                                    </div>
                                    <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Price</label>
                                            <input name="price" defaultValue={updatedProduct?.price} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" id="integration_street_address" />
                                            <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                        </div>
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Type<abbr title="required"></abbr></label>
                                            <select name="type" required="required" className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full">
                                                <option value="">Select</option>
                                                <option value="T-Shirt">T-Shirt</option>
                                                <option value="Sneakers">Sneakers</option>
                                                <option value="Casual Apparel">Casual Apparel</option>
                                                <option value="Outerwear">Outerwear</option>
                                                <option value="Kids' Apparel">Kids' Apparel</option>
                                                <option value="Handbags">Handbags</option>
                                                <option value="Watches">Watches</option>
                                                <option value="EyeWear">EyeWear</option>
                                                <option value="FootWear">FootWear</option>
                                                <option value="Accessories">Accessories</option>
                                                <option value="Denim Apparel">Denim Apparel</option>
                                            </select>
                                            <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                        </div>
                                    </div>
                                    <div className="flex-auto w-full mb-1 text-xs space-y-2">
                                        <label className="font-semibold text-gray-600 py-2">Description</label>
                                        <textarea defaultValue={updatedProduct?.description} name="description" id="" className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4" placeholder="Enter Product Details and Specifications" spellCheck={false}></textarea>

                                    </div>
                                    <div className="w-full flex flex-col mb-3">
                                        <label className="font-semibold text-gray-600 py-2">Rating</label>
                                        <select name="rating" required="required" className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full" id="integration_city_id">

                                            <option value="">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                    </div>
                                    <p className="text-xs text-red-500 text-right my-3">Required fields are marked with an asterisk <abbr title="Required field">*</abbr></p>
                                    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                        <button onClick={window.location.reload} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">Cancel</button>
                                        <input type="submit" value="Update Product" className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProducts;