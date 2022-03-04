import logo from './logo.svg';
import './App.css';
import NavBar from './component/menu/Navbar.js';
import ArticlesCards from './component/ArticlesCards.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ArticlesCards />
    </div>
  );
}

export default App;