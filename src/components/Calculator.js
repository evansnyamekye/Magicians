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
    <section className="flex flex-col md:flex-row gap-5 sm:mx-auto">
      <div className="md:w-4/12">
        <p>Lets do some maths</p>
      </div>
      <div className="md:w-8/12">
        <Display result={calculatorObj.next || calculatorObj.total || '0'} />
        <div className="row">
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('AC')}>AC</button>
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('+/-')}>+/-</button>
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('%')}>%</button>
          <button type="button" className="key !bg-orange-400" onClick={() => handleButtonClick('÷')}>÷</button>
        </div>
        <div className="row">
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('7')}>7</button>
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('8')}>8</button>
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('9')}>9</button>
          <button type="button" className="key !bg-orange-400" onClick={() => handleButtonClick('x')}>x</button>
        </div>
        <div className="row">
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('4')}>4</button>
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('5')}>5</button>
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('6')}>6</button>
          <button type="button" className="key !bg-orange-400" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('1')}>1</button>
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('2')}>2</button>
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('3')}>3</button>
          <button type="button" className="key !bg-orange-400" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button type="button" className="key w-6/12" onClick={() => handleButtonClick('0')}>0</button>
          <button type="button" className="key w-3/12" onClick={() => handleButtonClick('.')}>.</button>
          <button type="button" className="key !bg-orange-400" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
