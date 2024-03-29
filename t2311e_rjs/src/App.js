import './App.css';
import Menu from './component/common/Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './component/page/Home';
import Category from './component/page/Category';
import Cart from './component/page/Cart';
import Favourite from './component/page/Favourite';
import ProductDetail from './component/page/ProductDetail';
import { useState } from 'react';
import { ContextProvider } from './context/context';

function App() { // jsx
  const [cart,setCart] = useState([]);
  const [favourite,setFavourite] = useState([]);
  return (
    <ContextProvider value={{cart,setCart,favourite,setFavourite}}>
    <div className="App">
      <Menu/>
      <section className='main'>
          <Routes>
              <Route path='/' Component={Home} />
              <Route path='/category' Component={Category} />
              <Route path='/product/:id' Component={ProductDetail} />
              <Route path='/cart' Component={Cart} />
              <Route path='/favourite' Component={Favourite} />
          </Routes>
       </section>
    </div>
    </ContextProvider>
  );
}

export default App;
