import React from "react";
import { useHistory } from "react-router-dom";

const TodoCard = ({ todo }) => {
  const history = useHistory();

  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        width: "400px",
        padding: "10px"
      }}
      key={todo.id}
      onClick={() => history.push(`/todo/${todo.id}`)}
    >
      <h3>{todo.title}</h3>
      <h5>{`Completed : ${todo.completed}`}</h5>
    </div>
  );
};

export default TodoCard;
