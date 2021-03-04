import React from "react";
import { useGlobalContext } from "./context";

import Modal from "./Modal";
function App() {
  const {
    questions,
    index,
    nextQuestion,
    checkAnswer,
    options,
  } = useGlobalContext();

  const { question, type } = questions[index];

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">Questions : {index}</p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {options.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswer(type, answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
