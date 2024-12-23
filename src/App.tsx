import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import QuizFooter from "./components/progres-bar";

const questions = [
  {
    id: 1,
    score: 100,
    name: "რას გვიბრუნებს useState ჰუკი?",
    variants: [
      { variantId: 1, name: "ობიექტს", isCorrect: false },
      { variantId: 2, name: "მასივს", isCorrect: true },
      { variantId: 3, name: "სტრინგს", isCorrect: false },
      { variantId: 4, name: "ბულეანს", isCorrect: false },
    ],
  },
  {
    id: 2,
    score: 100,
    name: "რეაქტში მონაცემები მოძრაობენ იერარქიულად",
    variants: [
      { variantId: 1, name: "ზემოდან ქვემოთ", isCorrect: true },
      { variantId: 2, name: "ქვემოდან ზემოთ", isCorrect: false },
      { variantId: 3, name: "ორივე მიმართულებით", isCorrect: false },
    ],
  },
  {
    id: 3,
    score: 100,
    name: "useState-ის საწყის მნიშვნელობად შეგვიძლია გვქონდეს",
    variants: [
      { variantId: 1, name: "სტრინგი", isCorrect: false },
      { variantId: 2, name: "ობიექტი", isCorrect: false },
      { variantId: 3, name: "ნებისმიერი მონაცემის ტიპი", isCorrect: true },
    ],
  },
  {
    id: 4,
    score: 100,
    name: "შეგვიძლია თუ არა useState ჰუკის გამოყენება if-ის შიგნით?",
    variants: [
      { variantId: 1, name: "კი", isCorrect: false },
      { variantId: 2, name: "არა", isCorrect: true },
    ],
  },
];
function App() {
  const [questionIndex, setQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [correctAnswers, setCorrectAnswors] = useState(0);

  function onAnswer(isCorrect: boolean, score: number) {
    if (isCorrect) {
      setTotalScore(totalScore + score);
      setCorrectAnswors(correctAnswers + 1);
    }
    setQuestion(questionIndex + 1);
  }

  return (
    <main className="flex justify-center items-center h-[100vh] text-[#191D63]">
      <div className="w-4/6 h-[600px] bg-[#EDE8E3] p-10 text-2xl font-bold">
        <div className="text-center">
          <h1>Quiz #2</h1>
        </div>

        <div className="questions mt-9">
          <div className="text-center">
            <div className="flex flex-col justify-center items-center">
              {questionIndex === 4 ? (
                <div>
                  <div>score: {totalScore}</div>
                  <div>
                    correct answers: {correctAnswers}/{questions.length + 1}
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="mb-9">{questions[questionIndex].name}</h2>
                  {questions[questionIndex].variants.map((res) => (
                    <div
                      key={res.variantId}
                      onClick={() =>
                        onAnswer(res.isCorrect, questions[questionIndex].score)
                      }
                      className="mb-6 w-[500px] py-5 cursor-pointer bg-white text-start px-10"
                    >
                      {res.name}
                    </div>
                  ))}
                </div>
              )}

              <QuizFooter currentQuestion={questionIndex} totalQuestions={questions.length}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
