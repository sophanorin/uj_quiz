import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { data, option } from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [questions, setQuestions] = useState(data);
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [options, setOpetions] = useState(option);
  const [result, setResult] = useState({
    "Graphic Design": 1,
    "Information Technology": 1,
    Doctor: 1,
    "Human Resources": 1,
    Scientist: 1,
    Engineer: 1,
    Marketing: 1,
  });

  const getPercent = (value) => {
    switch (value) {
      case "Like":
        return 100;
      case "Neutral":
        return 50;
      default:
        return 0;
    }
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (type, value) => {
    const percent = (getPercent(value) / 3).toFixed(0);
    setResult({ ...result, [type]: parseInt(percent) + result[type] });
    nextQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setWaiting(true);
    setResult({
      "Graphic Design": 1,
      "Information Technology": 1,
      Doctor: 1,
      "Human Resources": 1,
      Scientist: 1,
      Engineer: 1,
      Marketing: 1,
    });
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        questions,
        options,
        index,
        isModalOpen,
        result,
        nextQuestion,
        checkAnswer,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
