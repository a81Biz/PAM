import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Usa HashRouter
import Home from './components/Home';
import Playground from './components/Playground';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/playground" element={<Playground />} /> 
      </Routes>
    </Router>
  );
}

export default App;
