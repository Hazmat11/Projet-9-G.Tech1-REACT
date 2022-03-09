import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

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