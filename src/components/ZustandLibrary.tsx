import useStore from "../zustandStore/store";

const ZustandLibrary = () => {
  const { count, theme, increment, decrement, setTheme } = useStore();
  return (
    <div className="flex flex-col gap-5">
      <p className="text-black dark:text-white font-bold text-center text-xl">
        Zustand
      </p>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-black dark:text-white">Count: {count}</p>
        <div className="flex gap-2">
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={decrement}
          >
            Decrease
          </button>
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={increment}
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
            onClick={() => setTheme("light")}
          >
            Light
          </button>
          <button
            className="bg-black rounded-xl px-5 py-1 text-white cursor-pointer dark:bg-white dark:text-black duration-300"
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZustandLibrary;
