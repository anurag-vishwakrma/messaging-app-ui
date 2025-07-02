import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<div className="text-center mt-10">Welcome to Messaging App</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
