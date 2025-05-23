import { useDispatch, useSelector } from "react-redux";
import counterThemeSlice from "../slices/counterThemeSlice";
import { RootState } from "../store/store";

const RTKLibrary = () => {
  const { count, theme } = useSelector((state: RootState) => state.counterThemeSlice);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-5">
      <p className="text-black dark:text-white font-bold text-center text-xl">
        RTK
      </p>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-black dark:text-white">Count: {count}</p>
        <div className="flex gap-2">
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={() => dispatch(counterThemeSlice.actions.decrement())}
          >
            Decrease
          </button>
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={() => dispatch(counterThemeSlice.actions.increment())}
          >
            Increase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-black dark:text-white">Current theme: {theme}</p>
        <div className="flex gap-2">
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={() =>
              dispatch(counterThemeSlice.actions.setTheme("light"))
            }
          >
            Light
          </button>
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={() => dispatch(counterThemeSlice.actions.setTheme("dark"))}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default RTKLibrary;
