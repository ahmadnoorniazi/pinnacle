import React, { useState } from "react";
import Layout from "../../Components/Layout";
import Footer from "../../Components/Layout/Footer";
import "./index.css";
import Question from "../../Components/Question";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom'

const Homepage = () => {
  const [isBeginClimb, setIsBeginClimb] = useState(false);
  const [questionValues, setQuestionValues] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsList] = useState([
    {
      type: "text",
      fieldTitle: "city",
      questionTitle: "What state would you like to live in most?"
    },
    {
      type: "radio",
      fieldTitle: "state",
      questionTitle: "What state would you like to live in most?",
      options: [
        { label: "USA", value: "usa" },
        { label: "UAE", value: "uae" },
        { label: "UK", value: "uk" }
      ]
    }
  ]);
  const { register, handleSubmit } = useForm();
  const history = useHistory()
  const onSubmit = (data) => {
    console.log("onSub  ");
    onBeginClimb();
  };

  const onSubmitNext = () => {
    console.log("nexttttttttt");
    if (currentQuestion !== questionsList.length - 1) {
      onNextQuestion();
    } else {
      history.push("/story-details/1")
    }
  };

  const onBeginClimb = () => {
    setIsBeginClimb(true);
  };

  const onNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  console.log("currentQuestion", currentQuestion);
  return (
    <div>
      <Layout height="100vh" position="relative">
        <div>
          {!isBeginClimb && (
            <>
              <div className="story-header-text">
                <h5>Embark on your journey!</h5>
              </div>
              <div className="story-header-description">
                <h5>
                  A Story Experience that will take you through twists and turns
                  but at the end hopefully you reach the Pinnacle
                </h5>
              </div>
            </>
          )}
          {isBeginClimb && (
            <div className="questons-top-header-text">
              <h5>Begin your Climb</h5>
            </div>
          )}
          {!isBeginClimb && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="question-box">
                <div className="question-box-cont">
                  <Question
                    questionTitle="Who are you?"
                    type="text"
                    required
                    errors={{}}
                  />
                </div>
              </div>
              <div className="start-button-section">
                <Button type="submit" text="Begin your climb" />
              </div>
            </form>
          )}

          {isBeginClimb && (
            <form onSubmit={handleSubmit(onSubmitNext)}>
              <div className="question-box">
                <div className="question-box-cont">
                  {isBeginClimb && (
                    <Question
                      required
                      {...questionsList[currentQuestion]}
                      errors={{}}
                    />
                  )}
                </div>
                {!isBeginClimb && (
                  <div className="start-button-section">
                    <Button type="submit" text="Begin your climb" />
                  </div>
                )}
                {isBeginClimb && (
                  <div className="next-button-section">
                    {currentQuestion === questionsList.length - 1 ? (
                      <Button type="submit" text="Submit" />
                    ) : (
                      <Button type="submit" text="Next" />
                    )}
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
        <div>
        <Footer footerStyle={{position: "absolute"}} />
        </div>
      </Layout>
    </div>
  );
};

export default Homepage;
