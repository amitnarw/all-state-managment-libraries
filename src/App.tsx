import { Provider } from "react-redux";
import "./App.css";
import UseReducerHook from "./components/UseReducerHook";
import RTKLibrary from "./components/RTKLibrary";
import store from "./store/store";
import ZustandLibrary from "./components/ZustandLibrary";

function App() {
  return (
    <div className="flex flex-row gap-5 items-center justify-center w-full h-screen bg-white dark:bg-black duration-300">
      <UseReducerHook />
      <Provider store={store}>
        <RTKLibrary />
      </Provider>
      <ZustandLibrary />
    </div>
  );
}

export default App;
