//Propsの型定義
type Props = {
    title: string;
    disabled: boolean;
  };
  export const NormalButton = (props: Props) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const showTotalNum = () => {
      const total = numbers.reduce((prev, current) => prev + current, 0);
      alert(total);
    };
    return (
      <>
          //受け取ったpropsによって表示する内容が変わる
        <h1>{props.title}</h1>
        <button onClick={showTotalNum} disabled={props.disabled}>
          ボタン
        </button>
      </>
    );
  };