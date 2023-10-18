
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './Coffee';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();

  const [allCoffee,setAllCoffee] = useState(loadedCoffees)

  const setAllCoffees = _id =>{

        const updatedCoffeeList = allCoffee.filter(coffee=> coffee._id != _id)
        setAllCoffee(updatedCoffeeList)
  }
  return (
    <>

      <h1 className='text-3xl text-center font-bold mt-5'>Coffee Shop</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-10'>
        {
          allCoffee.map(coffee => <Coffee key={coffee._id} coffee={coffee} setAllCoffees={setAllCoffees}></Coffee>)
        }
      </div>

    </>
  )
}

export default App
