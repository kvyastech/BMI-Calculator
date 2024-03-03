import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calSum = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please Enter A Valid Height and Weight");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(2));
    }

    if (bmi < 18) {
      setMessage("Your Underweight");
    } else if (bmi > 25) {
      setMessage("Your Overweight");
    }
  };

  const Reload = () => {
    window.location.reload();
    // setWeight("");
    // setHeight("");
    // setBmi("");
    // setMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>

        <form onSubmit="calSum">
          <div>
            <label>Weight (in Kg)</label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter Weight"
            />
          </div>
          <div>
            <label>Height (in m)</label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter Height"
            />
          </div>

          <div>
            <button className="btn1" type="submit" onClick={calSum}>
              Calculate
            </button>
            <button className="btn2" type="submit" onClick={Reload}>
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3
            className={bmi < 18 ? "underweight" : bmi > 25 ? "overweight" : ""}
          >
            Your BMI is: {bmi}
          </h3>
          <p
            className={
              bmi < 18 ? "underweight" : bmi > 25 ? "overweight" : "normal"
            }
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
