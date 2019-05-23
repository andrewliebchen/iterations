import React, { useState } from "react";
import _ from "lodash";

const App = props => {
  const [iterations, setIterations] = useState(1);
  const [initialValue, setInitialValue] = useState(4);
  const [increment, setIncrement] = useState(4);

  return (
    <div>
      <div>
        <span>Do </span>
        <input
          type="number"
          placeholder="Iterations"
          value={iterations}
          onChange={event => setIterations(parseInt(event.target.value))}
        />
        <span> iterations starting with </span>
        <input
          type="number"
          placeholder="Starting value"
          value={initialValue}
          onChange={event => setInitialValue(parseInt(event.target.value))}
        />
        <span> and increment by </span>
        <input
          type="number"
          placeholder="Increment"
          value={increment}
          onChange={event => setIncrement(parseInt(event.target.value))}
        />
      </div>
      {_.times(iterations, i => (
        <div
          key={i}
          style={{
            margin: 20,
            border: "1px solid",
            display: "inline-block",
            padding: increment * i + initialValue
          }}
        >
          Example
        </div>
      ))}
    </div>
  );
};

export default App;
