import { useReducer } from "react";

const UseReducerHook = () => {
  const reducer = (
    state: { count: number; theme: string },
    action: { type: string }
  ) => {
    if (action.type === "increase") {
      return {
        ...state,
        count: state.count + 1,
      };
    } else if (action.type === "decrease") {
      return {
        ...state,
        count: state.count - 1,
      };
    } else if (action.type === "dark") {
      document.documentElement.classList.add("dark");
      return {
        ...state,
        theme: "dark",
      };
    } else if (action.type === "light") {
      document.documentElement.classList.remove("dark");
      return {
        ...state,
        theme: "light",
      };
    }
    throw new Error("Unknown action");
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, theme: "light" });

  return (
    <div className="flex flex-col gap-5">
      <p className="text-black dark:text-white font-bold text-center text-xl">
        useReducer
      </p>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-black dark:text-white">Count: {state?.count}</p>
        <div className="flex gap-2">
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={() => dispatch({ type: "decrease" })}
          >
            Decrease
          </button>
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={() => dispatch({ type: "increase" })}
          >
            Increase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-black dark:text-white">
          Current theme: {state?.theme}
        </p>
        <div className="flex gap-2">
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={() => dispatch({ type: "light" })}
          >
            Light
          </button>
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={() => dispatch({ type: "dark" })}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerHook;
