import { NavBar } from './components/NavBar';
import { ItemCarrousel } from './components/ItemCarrousel';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'  element={<ItemCarrousel />} />
        <Route path='/listado'  element={<ItemListContainer />} />
        <Route path='/detalle'  element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;