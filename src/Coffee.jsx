/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Coffee = ({ coffee, setAllCoffees }) => {

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
                Swal.fire(
                    // 'Deleted!',
                    // 'Your file has been deleted.',
                    // 'success'

                    console.log('deleted', _id),

                    fetch(`http://localhost:5000/coffee/${_id}`, {

                        method: 'DELETE',

                    })
                        .then(res => res.json())
                        .then(data => {

                            console.log(data)

                            if (data.deletedCount > 0) {
                                alert('Coffee deleted successfully')
                                setAllCoffees(_id)
                            }
                        })
                )
            }
        })
    }

    return (
        <div>

            <div className="card lg:card-side bg-base-100 shadow-xl">

                <img src={coffee.photo} alt="Album" className="lg:w-64 h-60 w-full" />
                <div className="flex p-5 justify-between gap-20">
                    <div>

                        <h2 className="card-title">{coffee.name}</h2>

                        <p>{coffee.category}</p>

                        <p>{coffee.taste}</p>
                    </div>
                    <div>
                        <div className="flex flex-col gap-5">
                            <button className="btn btn-primary w-28">View</button>

                            <Link to={`/updateCoffee/${coffee._id}`}>
                                <button className="btn btn-primary w-28">Edit</button>
                            </Link>

                            <button className="btn btn-primary w-28" onClick={() => handleDelete(coffee._id)}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;