import MainLayout from '../components/Layouts/MainLayout'

const SuccessPage = function SuccessPage({ updateIsSubmitted }: PageProperties) {
  const retakeSurvey = () => {
    updateIsSubmitted(false)
  }

  return (
    <MainLayout title="Thank you!">
      <p className="text-2xl my-10">
        Your answers have been submitted. You may close this page, or take the survey again and update your answers.
      </p>
      <button className="py-2 px-4 text-xl bg-blue-700 text-gray-50 rounded-md" type="button" onClick={retakeSurvey}>
        Retake the survey
      </button>
    </MainLayout>
  )
}

export default SuccessPage

interface PageProperties {
  updateIsSubmitted: (value: boolean) => void
}
