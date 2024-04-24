import logo from "./logo.svg";
import "./Usestate.css";
import { useState } from "react";
const App = () => {
  const [bgColor, setBgColor] = useState("");
  const [isVisible, setVisibility] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0); // 新しいstateを追加
  const [strText, setStrText] = useState(""); // 新しいstateを追加

  const updateVisibility = () => {
    setVisibility((isVisible) => !isVisible);
  };
  const handleBgChange = (color: string) => {
    setBgColor(color);
  };
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1; // 1〜100のランダムな整数を生成
    setRandomNumber(newRandomNumber);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrText(event.target.value);
  };

  const alertText = () => {
    alert(strText);
  };
  return (
    <div className="App">
      <div className={`App-header ${bgColor}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={updateVisibility}>
          {isVisible ? "非表示にする" : "表示する"}
        </button>
        <input type="text" id="strText" onChange={handleInputChange}></input>
        <button onClick={() => alertText()}>
          入力された文字をアラートで出す
        </button>
        {isVisible ? (
          <div className="buttonWrap">
            <button onClick={() => handleBgChange("blue")}>
              背景を青にする
            </button>
            <button onClick={() => handleBgChange("red")}>
              背景を赤にする
            </button>
            <button onClick={() => handleBgChange("")}>
              背景を初期値に戻す
            </button>
            {/* 新しいボタンを追加 */}
            <button onClick={generateRandomNumber}>
              ランダムな数を生成する
            </button>
            {/* ランダムな数を表示 */}
            {randomNumber && <p>生成された数: {randomNumber}</p>}
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default App;
