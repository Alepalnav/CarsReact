import axios from 'axios';

const baseURL = 'https://cars-app-mocha.vercel.app/cars';

const apiService = axios.create({
baseURL,
});

export const getCars = () => apiService.get()

export const getCar = (CarId) => {
return apiService.get(`/${CarId}`);
};

export const createCar = (carData) => {
return apiService.post('/', carData);
};

export const updateCar = (CarId, updatedData) => {
return apiService.put(`/${CarId}`, updatedData);
};

export const deleteCar = (CarId) => {
return apiService.delete(`/${CarId}`);
};