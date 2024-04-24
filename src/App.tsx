import { Todo } from "./todo";
const App: React.FC = () => {
  const handleTodoClick = () => {
    console.log("Todo clicked");
  };
  return (
    <div>
      <h1>My Todo List</h1>
      <Todo title="Do laundry" handleClick={handleTodoClick} />
      <Todo
        title="Buy groceries"
        isCompleted={true}
        handleClick={handleTodoClick}
      />
    </div>
  );
};
export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { NormalButton } from './NormalButton';
// import { Button2 } from './Button2';
// import { Todo } from './todo';


// import { useState } from 'react';

// // const [count, setCount] = useState(0);
// // const onClickButton = () => {
// //   setCount((prev) => prev +1);
// // };

// function App() {

//   const App: React.FC = () => {
//     const handleTodoClick = () => {
//       console.log("Todo clicked");
//     };
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Todo title="Do laundry" handleClick={handleTodoClick} />
//       <Todo
//         title="Buy groceries"
//         isCompleted={true}
//         handleClick={handleTodoClick}
//       />
//         <Button2 title="Propsについて学ぼう" disabled={false} children = 'children' />
//       </header>
//     </div>
//   );
// }

// export default App;
