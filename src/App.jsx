import { NavBar } from './components/NavBar';
import { LandingCarrousel } from './components/LandingCarrousel';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'  element={<LandingCarrousel />} />
        <Route path='/tienda/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId'  element={<ItemListContainer />} />
        <Route path='/details/:itemId'  element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;