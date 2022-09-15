import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="main-container">
        <ItemListContainer
        buttonText='Agregar al carrito'/>
      </main>
    </div>
  );
}

export default App;
