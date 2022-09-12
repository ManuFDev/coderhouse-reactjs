import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="main-container">
        <ItemListContainer
          img="https://picsum.photos/id/1021/367/267"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit nemo pariatur error odit laboriosam odio. Magnam vitae illo minima vel maiores voluptate porro dolorem nisi ipsum dicta, qui enim."
          buttonText="Comprar"
        />
        <ItemListContainer
          img="https://picsum.photos/id/1033/367/267"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit nemo pariatur error odit laboriosam odio. Magnam vitae illo minima vel maiores voluptate porro dolorem nisi ipsum dicta, qui enim."
          buttonText="Comprar"
        />
        <ItemListContainer
          img="https://picsum.photos/id/1050/367/267"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit nemo pariatur error odit laboriosam odio. Magnam vitae illo minima vel maiores voluptate porro dolorem nisi ipsum dicta, qui enim."
          buttonText="Comprar"
        />
      </main>
    </div>
  );
}

export default App;
