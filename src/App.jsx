import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Car from './cars/carsList';
import InfoCar from './cars/infoCar';
import AddCar from './cars/addCar';
import EditCar from './cars/editCar';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Car />}></Route>
          <Route path="/infoCar/:id" element={<InfoCar />}></Route>
          <Route path="/addCar" element={<AddCar />}></Route>
          <Route path="/editCar/:id" element={<EditCar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;




