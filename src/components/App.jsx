import React from "react";
import Todos from "components/Todos/todos";
import "assets/css/style.scss";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Todos />
      <ToastContainer
        autoClose={2000}
        hideProgressBar
        position="top-center"
        className="toast__container"
        closeButton={false}
      />
    </>
  );
};

export default App;
