import './App.css';
import { Container, Navbar } from 'react-bootstrap';
import MyNavBar from './component/menu/MyNavBar.js';
import ArticlesCards from './component/articles/ArticlesCards.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <p><br></br></p>
      <h1>Exotic Taste</h1>
      <h2>The taste of rarity</h2>
      <p><br></br></p>
      <Container>
        <ArticlesCards />
      </Container>
    </div>
  );
}

export default App;
