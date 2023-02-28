import React from "react";
import Navbar from "./Navbar/Navbar";
import Todo from "./Todo/Todo";

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Todo/>
      </div>
    </>
  );
};

export default App;
