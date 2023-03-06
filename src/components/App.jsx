import React from "react";
import Navbar from "components/Navbar/Navbar";
import Todo from "components/Todo/Todo";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Todo />
      </div>
    </>
  );
};

export default App;
