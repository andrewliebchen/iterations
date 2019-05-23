import React, { useState } from "react";
import _ from "lodash";

const App = props => {
  const [count, setCount] = useState(1);
  const [iteration, setIteration] = useState({
    property: "padding",
    initialValue: 4,
    increment: 4
  });

  return (
    <div>
      <div>
        <span>Do </span>
        <input
          type="number"
          placeholder="Iterations"
          value={count}
          onChange={event => setCount(parseInt(event.target.value))}
        />
        <span> iterations of </span>
        <select
          value={iteration.property}
          onChange={event =>
            setIteration({ ...iteration, property: event.target.value })
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
            setIteration({
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
            setIteration({
              ...iteration,
              increment: parseInt(event.target.value)
            })
          }
        />
      </div>
      {_.times(count, i => {
        const { property, increment, initialValue } = iteration;
        let style = {
          margin: 20,
          border: "1px solid",
          display: "inline-block"
        };
        style[property] = increment * i + initialValue;

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
