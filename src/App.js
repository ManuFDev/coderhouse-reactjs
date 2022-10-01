import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/CartWidget/Cart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<ItemListContainer buttonText='Agregar al carrito' />} />
            <Route path="/funko/:id" element={<ItemDetailContainer />} />
            <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
