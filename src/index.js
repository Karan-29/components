import React from "react";
import ReactDOM from "react-dom";
// import faker from "faker";
import MultipleComments from "./components/MultipleComments";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div>
      <MultipleComments />
      <ApprovalCard />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
