import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './app/login/page';
import SignUp from './app/signup/page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Routes path="/login" element={<Login />} />
      <Routes path="/signup" element={<SignUp />} />
      <Routes path="/" element={<h1>Chekov Todo</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
