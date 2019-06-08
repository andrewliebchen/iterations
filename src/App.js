import React from "react";
import { view } from "react-easy-state";
import store, { defaultIteration } from "./store";

const App = props => (
  <div style={{ padding: 20 }}>
    <div>
      <div>
        <input
          type="number"
          placeholder="Iterations"
          defaultValue={store.count}
          onChange={event => (store.count = parseInt(event.target.value))}
        />
        <span> iterations</span>
      </div>

      {store.iterations.map((iteration, i) => (
        <div key={i}>
          <select
            defaultValue={iteration.property}
            onChange={event =>
              (store.iterations[i].property = event.target.value)
            }
          >
            <option value="borderRadius">border-radius</option>
            <option value="borderWidth">border-width</option>
            <option value="fontSize">font-size</option>
            <option value="padding">padding</option>
          </select>
          <span> starting with </span>
          <input
            type="number"
            placeholder="Starting value"
            defaultValue={iteration.initialValue}
            onChange={event =>
              (store.iterations[i].initialValue = parseInt(event.target.value))
            }
          />
          <span> and increment by </span>
          <input
            type="number"
            placeholder="Increment"
            defaultValue={iteration.increment}
            onChange={event =>
              (store.iterations[i].increment = parseInt(event.target.value))
            }
          />
        </div>
      ))}
      <button onClick={() => store.iterations.push(defaultIteration)}>
        Add
      </button>
    </div>
    {store.iterations.map((iteration, i) => {
      let style = {
        margin: 20,
        border: "1px solid",
        display: "inline-block"
      };

      const { property, increment, initialValue } = iteration;
      style[property] = increment * i + initialValue;

      return (
        <div key={i} style={style}>
          Example
        </div>
      );
    })}
  </div>
);

export default view(App);
