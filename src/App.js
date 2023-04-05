import './App.css';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Nav from './components/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivatedComponent from './components/PrivatedComponent';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>

          <Route element={<PrivatedComponent />}>
            <Route path="/" element={<h1>Products Components</h1>} />
            <Route path="/add" element={<h1>Add Products Components</h1>} />
            <Route path="/update" element={<h1>Update Products Components</h1>} />
            <Route path="/logout" element={<h1>Sign Out Components</h1>} />
            <Route path="/profile" element={<h1>Profile Components</h1>} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h1 style={{ color: 'red' }}>404 Error Page Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
