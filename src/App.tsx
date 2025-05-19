import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FormBuilder from './components/FormBuilder';
import DynamicForm from './components/DynamicForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormBuilder />} />
        <Route path="/form/display" element={<DynamicForm />} />
      </Routes>
    </Router>
  );
}

export default App;
