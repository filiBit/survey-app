export default {
  surveys: [
    {
      type: 'surveys',
      id: '2660dd24-e2db-42c1-8093-284b1df2664c',
      attributes: {
        title: 'Film feedback form',
        description:
          '<p>Thank you for participating in the film festival!</p><p>Please fill out this short survey so we can record your feedback.</p>',
        questions: [
          {
            questionId: 'film',
            questionType: 'string',
            label: 'What film did you watch?',
            required: true,
            attributes: null
          },
          {
            questionId: 'review',
            questionType: 'integer',
            label: 'How would you rate the film? (1 - Very bad, 5 - Very good)',
            required: true,
            attributes: {
              min: 1,
              max: 5
            }
          }
        ]
      }
    }
  ]
}
