import { useEffect, useState } from "react";
import "./App.css";
import QuizSection from "./assets/components/quizSection";
import Timer from "./assets/components/Timer";
import Start from "./assets/components/Start";

const moneyPyramid = [
  { id: 1, amount: "₹ 5,000" },
  { id: 2, amount: "₹ 10,000" },
  { id: 3, amount: "₹ 20,000" },
  { id: 4, amount: "₹ 40,000" },
  { id: 5, amount: "₹ 80,000" },
  { id: 6, amount: "₹ 1,60,000" },
  { id: 7, amount: "₹ 3,20,000" },
  { id: 8, amount: "₹ 6,40,000" },
  { id: 9, amount: "₹ 12,50,000" },
  { id: 10, amount: "₹ 25,00,000" },
  { id: 11, amount: "₹ 50,00,000" },
  { id: 12, amount: "₹ 1 Crore" },
  { id: 13, amount: "₹ 3 Crore" },
  { id: 14, amount: "₹ 7 Crore" },
].reverse();

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  const [hint, setHint] = useState("");

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber]);

  const msg = (earned) => {
    if (earned === "₹ 0") {
      {
        return (
          <h4 className="earnedH2">
            Sorry, You Could Not Earn Anything{" "}
            <div className="sadimoji">😞</div>
          </h4>
        );
      }
    } else {
      {
        return (
          <h4 className="congratesMsg">
            {" "}
            Congratulations 🎉 🎊, You Earned 💰
            <div className="earnedMoney">{earned}</div>
          </h4>
        );
      }
    }
  };

  return (
    <>
      <div className="app">
        {username ? (
          <>
            <div className="main">
              {stop ? (
                <h1 className="endText">{msg(earned)}</h1>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer
                        setStop={setStop}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <QuizSection
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setHint={setHint}
                      hint={hint}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li
                    key={m.id}
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <Start setUsername={setUsername} />
        )}
      </div>
    </>
  );
}

export default App;
