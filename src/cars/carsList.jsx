import  {useEffect, useState} from "react";
import {getCars, deleteCar} from "../services/carService";
import './carsList.css';
import { Link } from "react-router-dom";

export default function Car() {
  const [cars, setCars] = useState(null);



  useEffect(() => {
    async function getCarsComp(){
      const response = await getCars();
      setCars(response.data);
    }
    getCarsComp();
  }, []); 

  
  const handleDeleteCar = (carId) => {
    deleteCar(carId).then(() => {
      alert('Car deleted!');
    });
  };
  
  if (!cars) return null;
  return (
    <div>
      <Link to={`/addCar`}>
      <button>Add Car</button>
      </Link>
      <div className="car-list">
        {cars.map((car) => (
          <div className="car-card" key={car._id}>
            <h2>Marca: {car.marca}</h2>
            <p>Modelo: {car.modelo}</p>
            <p>Año: {car.year}</p>
            <Link to={`/infoCar/${car._id}`}>
              <button>Info</button>
            </Link>
            <Link to={`/editCar/${car._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={()=>handleDeleteCar(car._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}