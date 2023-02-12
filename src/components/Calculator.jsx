import React, { useState } from 'react';
const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [failureMessage, setFailureMessage] = useState("");

    const handleButton = (action) => {
        if (num1 === "" || num2 === "") {
            num1 === "" ? setFailureMessage("Error: Num 1 cannot be empty") : setFailureMessage("Error: Num 2 cannot be empty");
            setSuccessMessage("")
        }
        else if (!isNaN(num1) && !isNaN(num2)) {
            if (action === "+") setResult(parseInt(num1) + parseInt(num2))
            else if (action === "-") setResult(num1 - num2)
            else if (action === "*") setResult(num1 * num2)
            else if (action === "/") setResult(num1 / num2)
            setSuccessMessage("Success: Your result is shown above!")
            setFailureMessage("")
        }

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        name === "num2" ? setNum2(value) : setNum1(value);
    }
    return (
<div className="Calculator">
      <br />
      <div>
        <div id="title">React Calculator</div>

        

        <div className="inputBoxes">
          <input type="text" id="input1" name='num1' placeholder="Num 1" onChange={handleChange} />
          <br /><br />
          <input type="text" id="input2" name='num2' placeholder="Num 2" onChange={handleChange}/>
          <br /><br />
          <div id="result">Result = {result}</div>
        </div>
      </div>

      <div className="sucerr">
        <div id="error">{failureMessage}</div>
        <div id="success">{successMessage}</div>
      </div>

      <div className="buttonClass">
        <button className='btn' onClick={() => { handleButton("+") }}>+</button>
        <button className='btn' onClick={() => { handleButton("-") }}>-</ button>
        <button className='btn' onClick={() => { handleButton("*") }}>*</button>
        <button className='btn' onClick={() => { handleButton("/") }}>/</button>
      </div>
      
    </div>
    )
}
export default Calculator;