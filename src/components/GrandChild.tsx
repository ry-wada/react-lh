import React, { useContext } from "react";
import { HeroesContext } from "../UseContext";
const GrandChild = () => {
  //useContextの引数にコンテキストオブジェクトを渡す
  const context = useContext(HeroesContext);
  return (
    <div>
      {context.map((hero) => (
        <p>{hero}</p>
      ))}
    </div>
  );
};
export default GrandChild;
