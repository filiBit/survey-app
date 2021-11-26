import 'tailwindcss/tailwind.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import HomePage from './pages/Index';
import SuccessPage from './pages/Success';

const App = function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isFormSubmitted) {
      navigate('/success');
    } else {
      navigate('/');
    }
  }, [isFormSubmitted]);

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
