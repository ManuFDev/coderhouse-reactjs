import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/CartWidget/Cart";
import { CartContextProvider } from "./context/CartContext";
import { useState, useEffect} from 'react';
import Spinner from "./components/Spinner/Spinner";


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1200)

  }, [])

  return (
    <div className="App">
      {
        loading ? 
      <Spinner/>
        :
      <CartContextProvider>
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
    </CartContextProvider>
      }
    </div>
  );
}

export default App;
