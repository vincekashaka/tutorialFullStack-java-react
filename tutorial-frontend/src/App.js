import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import TutorialDashboard from './components/TutorialDashboard';
import AddTutorials from './components/AddTutorials';
import Tutorials from './components/Tutorials';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/dashboad' element={<TutorialDashboard />} />

          <Route
            exact
            path='/dashboad/addTutorial'
            element={<AddTutorials />}
          />
          <Route path='/tutorials/:id' element={<Tutorials />} />

          {/* <Route exact path='/tutorials' element={<TutorialDashboard />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
