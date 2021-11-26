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

  const updateIsSubmitted = (isSubmited: boolean) => {
    setIsFormSubmitted(isSubmited);
  };

  return (
    <div>
      <Routes>
        <Route key="1" path="/" element={<HomePage updateIsSubmitted={updateIsSubmitted} />} />
        <Route key="2" path="/success" element={<SuccessPage updateIsSubmitted={updateIsSubmitted} />} />
      </Routes>
    </div>
  );
};

export default App;
