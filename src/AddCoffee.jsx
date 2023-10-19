const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo };

        console.log(newCoffee);

        fetch('https://server-2mfgix9rk-fariha1865s-projects.vercel.app/coffee',{

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.insertedId)
                {
                    alert('coffee added successfully')
                }
            })

    }
    return (
        <div className="bg-gray-200 h-screen">
            <h1 className="text-4xl text-center font-bold pt-5 text-amber-950">add a new coffee</h1>

            <form onSubmit={handleAddCoffee}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Coffee Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>



                </div>
                <div className="flex justify-center">
                    <input type="submit" value="Add Coffee" className="btn w-1/2  bg-amber-950 hover:bg-amber-900 text-white" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;