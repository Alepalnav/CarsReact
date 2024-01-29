import { Link, useParams } from "react-router-dom";
import './carsList.css';
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = 'https://cars-app-mocha.vercel.app/cars';

export default function InfoCar(){
  const [car, setCar] = useState(null);
  let {id}= useParams();

    console.log(id);
    useEffect(() => {
      axios.get(`${baseURL}/${id}`)
        .then(response => {
          setCar(response.data);
        })
        .catch(error => {
          console.error('Error al obtener los detalles del coche:', error);
        });
    }, [id]);

    if (car === null) {
      return <div>Car not found.</div>;
    }

    return (
        <div className="car-card">
          <h2>Marca:{car.marca}</h2>
            <p>Modelo: {car.modelo}</p>
            <p>Año: {car.year}</p>
            <Link to={`/`}>
            <button>Return</button>
            </Link>        
          </div>
    );

}