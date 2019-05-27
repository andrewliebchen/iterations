import { store } from "react-easy-state";

export const defaultIteration = {
  property: "padding",
  initialValue: 4,
  increment: 4
};

export default store({
  count: 1,
  iterations: [defaultIteration]
});
