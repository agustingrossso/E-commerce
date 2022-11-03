
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header>
       <NavBar/>
       <ItemListContainer name='Hola Mundo' sub='Estamos Llegando!'/>
      </header>
    </div>
  );
}

export default App;
