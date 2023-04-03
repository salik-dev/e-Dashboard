import './App.css';
import Footer from './common/Footer';
import Signup from './common/Signup';
import Nav from './common/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Products Components</h1>} />
          <Route path="/add" element={<h1>Add Products Components</h1>} />
          <Route path="/update" element={<h1>Update Products Components</h1>} />
          <Route path="/logout" element={<h1>Logout Components</h1>} />
          <Route path="/profile" element={<h1>Profile Components</h1>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h1 style={{color: 'red'}}>404 Error Page Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
