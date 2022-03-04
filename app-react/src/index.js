import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.js';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

const Root = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));