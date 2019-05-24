import React, { useState } from "react";
import _ from "lodash";

const defaultIteration = {
  property: "padding",
  initialValue: 4,
  increment: 4
};

const App = props => {
  const [count, setCount] = useState(1);
  const [iterations, setIterations] = useState([defaultIteration]);

  return (
    <div>
      <div>
        <div>
          <input
            type="number"
            placeholder="Iterations"
            value={count}
            onChange={event => setCount(parseInt(event.target.value))}
          />
          <span> iterations</span>
        </div>

        {iterations.map((iteration, i) => (
          <div key={i}>
            <select
              value={iteration.property}
              onChange={event =>
                setIterations({ ...iteration, property: event.target.value })
              }
            >
              <option value="borderRadius">border-radius</option>
              <option value="fontSize">font-size</option>
              <option value="padding">padding</option>
            </select>
            <span> starting with </span>
            <input
              type="number"
              placeholder="Starting value"
              value={iteration.initialValue}
              onChange={event =>
                setIterations({
                  ...iteration,
                  initialValue: parseInt(event.target.value)
                })
              }
            />
            <span> and increment by </span>
            <input
              type="number"
              placeholder="Increment"
              value={iteration.increment}
              onChange={event =>
                setIterations({
                  ...iteration,
                  increment: parseInt(event.target.value)
                })
              }
            />
          </div>
        ))}
        <button
          onClick={() => setIterations([...iterations, defaultIteration])}
        >
          Add
        </button>
      </div>
      {_.times(count, i => {
        const { property, increments, initialValue } = iterations[0];
        let style = {
          margin: 20,
          border: "1px solid",
          display: "inline-block"
        };
        style[property] = increments * i + initialValue;

        return (
          <div key={i} style={style}>
            Example
          </div>
        );
      })}
    </div>
  );
};

export default App;
