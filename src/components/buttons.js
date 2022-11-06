import React from 'react';
import { useState } from 'react';
import './buttons.css';
import { evaluate } from 'mathjs';  

export default function Button() {
  const [calculator, setCalculator] = useState('');
  const submit = (event) => {
    event.preventDefault();
    setCalculator((cal) => evaluate(cal));
  };
  return (
    <form onSubmit={submit}>
      <div className="display">
        <span>{calculator}</span>
      </div>
  
      <div className="cal-body">
        <button type="button" onClick={() => setCalculator('')}>
          C
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal} + `)}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal} -  `)}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal} * `)}
        >
          X
        </button>

        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}1`)}
        >
          1
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}2`)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}3`)}
        >
          3
        </button>
        <button type="submit"> = </button>

        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}4`)}
        >
          4
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}5`)}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}6`)}
        >
          6
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}/`)}
        >
          ≑
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}7`)}
        >
          7
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}8`)}
        >
          8
        </button>
        <button
          type="button"
          onClick={() => setCalculator((cal) => `${cal}9`)}
        >
          9
        </button>

        <button type="button" onClick={() => setCalculator((cal) => `${cal}0`)}>
          0
        </button>
      </div>
    </form>
  );
}
