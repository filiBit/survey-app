import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import HomePage from './pages/Index';
import SuccessPage from './pages/Success';
import { useAppNavigation } from './hooks';

const App = function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  useAppNavigation({ isFormSubmitted, navigate });

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage updateIsSubmitted={setIsFormSubmitted} />} />
        <Route path="/success" element={<SuccessPage updateIsSubmitted={setIsFormSubmitted} />} />
      </Routes>
    </div>
  );
};

export default App;
