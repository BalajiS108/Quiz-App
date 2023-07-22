import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../components/Sounds/play.wav";
// import wait from "../components/Sounds/play.wav";
import wrong from "./Sounds/wrong.wav";
import correct from "./Sounds/correct.wav";

export default function QuizSection({
  setStop,
  questionNumber,
  setQuestionNumber,
  setHint,
  hint,
}) {
  const data = [
    {
      id: 1,
      question: "Which planet is known as the Red Planet ?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
      hint: "Fourth Planet from Sun",
    },
    {
      id: 2,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
      ],
      hint: "Renaissance period",
    },
    {
      id: 3,
      question: "What is the capital city of Australia?",
      answers: [
        {
          text: " Sydney",
          correct: false,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Canberra",
          correct: true,
        },
        {
          text: "Perth",
          correct: false,
        },
      ],
      hint: "Purpose-built",
    },

    {
      id: 4,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        {
          text: " China",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "South Korea",
          correct: false,
        },
        {
          text: "Thailand",
          correct: false,
        },
      ],
      hint: "Most Eastern",
    },

    {
      id: 5,
      question: "Who wrote the famous novel Pride and Prejudice?",

      answers: [
        {
          text: " Jane Austen",
          correct: true,
        },
        {
          text: "William Shakespeare",
          correct: false,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "George Orwell",
          correct: false,
        },
      ],
      hint: "Regency",
    },

    {
      id: 6,
      question: "In which country is the Great Wall located?",

      answers: [
        {
          text: " China",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Russia",
          correct: false,
        },
      ],
      hint: "Ancient wonder",
    },

    {
      id: 7,
      question: "Which is the largest ocean in the world?",

      answers: [
        {
          text: " Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
      ],
      hint: "Ring of Fire",
    },

    {
      id: 8,
      question: "Who is the author of the Harry Potter book series?",

      answers: [
        {
          text: " J.K. Rowling",
          correct: true,
        },
        {
          text: "Stephen King",
          correct: false,
        },
        {
          text: "George R.R. Martin",
          correct: false,
        },
        {
          text: "Dan Brown",
          correct: false,
        },
      ],
      hint: "Boy wizard",
    },

    {
      id: 9,
      question: "Which country is famous for the Eiffel Tower?",

      answers: [
        {
          text: " Italy",
          correct: false,
        },
        {
          text: "France",
          correct: true,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Spain",
          correct: false,
        },
      ],
      hint: "City of Love",
    },

    {
      id: 10,
      question: "Who invented the telephone?",

      answers: [
        {
          text: " Thomas Edison",
          correct: false,
        },
        {
          text: "Alexander Graham Bell",
          correct: true,
        },
        {
          text: "Albert Einstein",
          correct: false,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
      ],
      hint: "Sound transmission",
    },

    {
      id: 11,
      question: "What is the currency of Japan?",

      answers: [
        {
          text: "Yen",
          correct: true,
        },
        {
          text: "Euro",
          correct: false,
        },
        {
          text: "Rupee",
          correct: false,
        },
        {
          text: "Dollar",
          correct: false,
        },
      ],
      hint: "Sound transmission",
    },

    {
      id: 12,
      question: "Which planet is the largest in our solar system?",

      answers: [
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
      hint: "Sakura",
    },

    {
      id: 13,
      question: "Who painted the famous artwork The Starry Night?",

      answers: [
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: true,
        },
        {
          text: "Salvador Dali",
          correct: false,
        },
      ],
      hint: "Ear",
    },

    {
      id: 14,
      question: "Which country hosted the 2016 Summer Olympics?",

      answers: [
        {
          text: "Bazil",
          correct: true,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "United States",
          correct: false,
        },
      ],
      hint: "Rio Carnival Festival",
    },

    {
      id: 15,
      question: "Who is known as the Father of Modern Physics?",

      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
      ],
    },
  ];

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [count, setCount] = useState(0);
  // const [click, setClick] = useState(false);
  const [lifLineUsed, setLifeLineUsed] = useState(false);

  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, []);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
    setHint(false);
    setLifeLineUsed(false);
    if (hint) {
      setCount((prevState) => prevState + 1);
    }
  }, [questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (ans) => {
    setSelectedAnswer(ans);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(ans.correct ? "answer correct" : "answer wrong");
    });
    delay(5000, () => {
      if (ans.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          if (questionNumber === 14) {
            setStop(true);
          }
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  const UnlockHint = () => {
    setHint(true);
    // setCount((prevState) => prevState + 1);
    setLifeLineUsed(true);
    // if (lifLineUsed) {
    //   setCount((prevState) => prevState + 1);
    // }
  };

  return (
    <div>
      {count < 3 && !lifLineUsed ? (
        <button className="hints" onClick={UnlockHint}>
          Use Life Line {count + 1}
        </button>
      ) : (
        count < 3 && <button className="hints">Life Line {count + 1}</button>
      )}
      {count <= 3 ? (
        hint && question && <span className="hintdesc"> {question?.hint}</span>
      ) : (
        <span>Sorry you cannot use more hints</span>
      )}
      <div className="trivia">
        <div className="question">
          <span className="qNo">Q.No:{("Qno", question?.id)}</span>
          {question?.question}
        </div>
        <div className="answers">
          {question?.answers.map((ans) => (
            <div
              key={ans.id}
              className={selectedAnswer === ans ? className : "answer"}
              onClick={() => handleClick(ans)}
            >
              {ans.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
