import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import e from "cors";

export default function EditCar(){
    const[car, setCar]= useState({
        marca: '',
        modelo: '',
        year: '',
    })

    const baseURL = 'http://localhost:3000/cars';
    const navigate = useNavigate();


    let {id}= useParams();
    useEffect(() => {
        axios.get(`${baseURL}/${id}`).then((response)=>{
          console.log(response.data);
          setCar(response.data);
        })
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
      };

      const formData = new FormData(e.target);
      const updatedData = {};
      formData.forEach((value, key) => {
        updatedData[key] = value;
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${baseURL}/${car._id}`, car)
          .then(() => {
            alert('Car updated successfully!');
            navigate('/');
          })
          .catch((error) => {
            console.error('Error updating car:', error);
          });
      };

    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Marca:</label>
        <input type="text" name="marca" value={car.marca} onChange={handleChange} />
      </div>
      <div>
        <label>Modelo:</label>
        <input type="text" name="modelo" value={car.modelo} onChange={handleChange} />
      </div>
      <div>
        <label>Año:</label>
        <input type="text" name="year" value={car.year} onChange={handleChange} />
      </div>
      <button type="submit">Actualizar Coche</button>
      <Link to={`/`}>
            <button>Return</button>
          </Link>
    </form>
  );

}