import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function AddCar(){
  const [car, setCar] = useState(
    {
      marca: '',
      modelo: '',
      year:''
    }
    );
    
    const baseURL = 'http://localhost:3000/cars';
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setCar(prevCar => ({
        ...prevCar,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(baseURL, car)
        .then((response) => {
          console.log(response.data);
          setCar({ marca: '', modelo: '', year: '' });
          navigate('/');
        })
        .catch((error) => {
          console.error('Hubo un error al añadir el coche:', error);
        });
    };
  

    return (
      <div>
        <div className="car-card">
          <h2>Marca:{car.marca}</h2>
            <p>Modelo: {car.modelo}</p>
            <p>Año: {car.year}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Marca:</label>
            <input
              type="text"
              name="marca"
              value={car.marca}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Modelo:</label>
            <input
              type="text"
              name="modelo"
              value={car.modelo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Año:</label>
            <input
              type="text"
              name="year"
              value={car.year}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Añadir Coche</button>
          <Link to={`/`}>
            <button>Return</button>
          </Link>
        </form>
      </div>
    );
  }