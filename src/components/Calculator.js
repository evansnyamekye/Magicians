import React, { useState } from 'react';
import Display from './Display';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (button) => {
    const newCalculatorObj = calculate(calculatorObj, button);
    setCalculatorObj(newCalculatorObj);
  };

  return (
    <div className="container">
      <div className="calculator">
        <Display result={calculatorObj.next || calculatorObj.total || '0'} />
        <div className="row">
          <button type="button" className="key" onClick={() => handleButtonClick('AC')}>AC</button>
          <button type="button" className="key" onClick={() => handleButtonClick('+/-')}>+/-</button>
          <button type="button" className="key" onClick={() => handleButtonClick('%')}>%</button>
          <button type="button" className="key orange" onClick={() => handleButtonClick('÷')}>÷</button>
        </div>
        <div className="row">
          <button type="button" className="key" onClick={() => handleButtonClick('7')}>7</button>
          <button type="button" className="key" onClick={() => handleButtonClick('8')}>8</button>
          <button type="button" className="key" onClick={() => handleButtonClick('9')}>9</button>
          <button type="button" className="key orange" onClick={() => handleButtonClick('x')}>x</button>
        </div>
        <div className="row">
          <button type="button" className="key" onClick={() => handleButtonClick('4')}>4</button>
          <button type="button" className="key" onClick={() => handleButtonClick('5')}>5</button>
          <button type="button" className="key" onClick={() => handleButtonClick('6')}>6</button>
          <button type="button" className="key orange" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button type="button" className="key" onClick={() => handleButtonClick('1')}>1</button>
          <button type="button" className="key" onClick={() => handleButtonClick('2')}>2</button>
          <button type="button" className="key" onClick={() => handleButtonClick('3')}>3</button>
          <button type="button" className="key orange" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button type="button" className="key" onClick={() => handleButtonClick('0')}>0</button>
          <button type="button" className="key" onClick={() => handleButtonClick('.')}>.</button>
          <button type="button" className="key orange" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
