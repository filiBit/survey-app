import React from 'react';

const SuccessPage = function SuccessPage({ updateIsSubmitted }: {updateIsSubmitted: (value: boolean) => void}) {
  const retakeSurvey = () => {
    updateIsSubmitted(false);
  };

  return (
    <div className="w-full lg:max-w-3xl p-5 lg:p-10 mx-auto bg-white">
      <h1 className="text-center text-5xl mb-10">Thank you!</h1>
      <p className="text-2xl my-10">Your answers have been submitted. You may close this page, or take the survey again and update your answers.</p>
      <button className="py-2 px-4 text-xl bg-blue-700 text-gray-50 rounded-md" type="button" onClick={retakeSurvey}>Retake the survey</button>
    </div>
  );
};

export default SuccessPage;
