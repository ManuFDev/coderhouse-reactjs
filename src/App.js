import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartView from "./components/CartView/CartView";
import { CartContextProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/funko/:id" element={<ItemDetailContainer />} />
            <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<CartView/>} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
