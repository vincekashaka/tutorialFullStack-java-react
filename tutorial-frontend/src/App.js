import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
      </div>
    </Router>
  );
}

export default App;
