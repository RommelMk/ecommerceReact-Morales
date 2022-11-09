import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Servicios from './components/Servicios/Servicios';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<ItemListContainer/>} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path="/category/:idcategory" element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

