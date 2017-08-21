/** STUB
 * data permetant de générer un template de base et utilisé pour la génération d'un quiz
 */
const quizData = [
  {
    title: "Questionaire 1",
    questions: [
      {
        title:"Question 1 du Questinaire 1",
        assignment: "assigmenent",
        choices: [
          { title: "Bonne réponse", goodAnswer: true },
          { title: "Mauvaise réponse", goodAnswer: false },
          { title: "Mauvaise réponse", goodAnswer: false }
        ]
      },
      {
        title:"Question 2",
        singleChoice: true,
        choices: [
          { title: "Bonne réponse", goodAnswer: true },
          { title: "Mauvaise réponse", goodAnswer: false },
          { title: "Mauvaise réponse", goodAnswer: false }
        ]
      }
    ],
    submitButtonText: "OK"
  },
  {
    title: "Questionaire 2 ",
    questions: [
      {
        title:"Question 1 du Questinaire 2",
        singleChoice: true,
        assignment: "TEST !",
        choices: [
          { title: "Bonne réponse", goodAnswer: true },
          { title: "Mauvaise réponse", goodAnswer: false },
          { title: "Mauvaise réponse", goodAnswer: false }
        ]
      },
      {
        title:"Question 2",
        assignment: "TEST !",
        choices: [
          { title: "Bonne réponse", goodAnswer: true },
          { title: "Mauvaise réponse", goodAnswer: false },
          { title: "Mauvaise réponse", goodAnswer: false }
        ]
      }
    ],
    submitButtonText: "Validate"
  }
];

export default quizData;
