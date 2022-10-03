import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import TutorialDashboard from './components/TutorialDashboard';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/tutorials' element={<TutorialDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
