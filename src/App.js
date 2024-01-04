import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      {/* <Steps /> */}
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "Anuragv" });
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleCross() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="close" onClick={handleCross}>
        &times;
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
//lec 2
// to put a classname on the basis of the some condition , you will use ternary operator to do so

//lec 3 Handling Events the React Way
// here we can use eventListener same as HTML eventListener i.e. onClick(()=>{}) or some other eventListener
// inside the eventlistener we will not directly call the function instead we will use callback function

//lec 5 Creating a State Variable with useState

// ReactHooks - useState,useEffect, useReducer are the React Hooks which contains use in them

// Hooks can only be used at the Top level of the function, not inside the if statement, loops or function

// Dealing with state consists of three parts
// 1. making a new piece of state
// 2. using it in jsx or in Code
// 3. update the state in eventHandlers

// useState(...) returns an array
// element and function to change state

// in brackets of useState, you will put the initial value of piece of state

//lec 6 Don't set state manually
//piece of state should only be changed using set... e.g. setStep here, not manually

// if we are changing it, although it will not give an error but it will also do not affect the state change

// we should not mutate the value in functions in React , rather we can allot the different value using set...

//COMPONENT == VIEW in react

//lec 8 adding another piece of state
// just after return inside jsx we cannot directly write a javascript by using {} , rather we can write it inside an element;

// while conditional rendering remember the three ways of rendering (&&, conditional operator, and multiple returns)

//lec 9 React Dev Tools
// Components section
// we can actually take the value into piece of states that is inaccessible through UI

//lec 10
// update state in more safe way by using call back function

//lec 12
// each comoponent has and manages its own state

//difference b/w export default and export
// Default Export (export default):

// You can only have one default export per module.
// When importing, you can choose any name for the default import (it doesn't have to match the name used in the export statement)
// do not use {}

// Named Exports:

// You can have multiple named exports in a single module.
// When importing, you need to use the exact names specified in the export statement.
// use {}
