import Parent from "./components/Parent";
import "./App.css";
import { createContext } from "react";
// コンテキストオブジェクトを生成
export const HeroesContext = createContext([] as string[]);
const App = () => {
  const value = ["wolf", "alpaca", "sheep"];
  return (
    <div className="App">
      <div className="App-header">
        <p>useContext</p>
        {/* // Providerでラップしてvalueにデータを渡す */}
        <HeroesContext.Provider value={value}>
          <Parent />
        </HeroesContext.Provider>
      </div>
    </div>
  );
};
export default App;
