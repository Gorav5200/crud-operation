import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import DiscountCoupon from './pages/DiscountCoupon';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addUser' element={<Add/>} />
        <Route path='/editUser/:id' element={<Edit/>}/>
        <Route path='/discount' element={<DiscountCoupon/>}/>
        <Route path='/products' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
