import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        width: "400px",
        padding: "10px"
      }}
      key={todo.id}
    >
      <h3>{todo.title}</h3>
      <h5>{`Completed : ${todo.completed}`}</h5>
    </div>
  );
};

export default TodoCard;
