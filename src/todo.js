import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Todo = () => {
  const [todoItem, setTodoItem] = useState();
  const { id } = useParams();
  const todo_url = `https://jsonplaceholder.typicode.com/todos/${id}`;

  useEffect(() => {
    axios.get(todo_url).then((res) => {
      setTodoItem(res.data);
    });
  }, []);

  const { id: todoId, title, completed, userId } = todoItem || {};

  return (
    <div>
      {todoItem ? (
        <div
          style={{
            backgroundColor: "grey",
            margin: "10px",
            width: "400px",
            padding: "10px"
          }}
        >
          <h4> {`Todo id: ${todoId}`} </h4>
          <h4> {`Todo userId: ${userId}`} </h4>
          <h4> {`Todo title: ${title}`} </h4>
          <h4> {`Todo completed: ${completed}`} </h4>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
