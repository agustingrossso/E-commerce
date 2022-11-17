
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryName" element={<ItemListContainer />}/>

          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path='cart' element={<Cart />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
