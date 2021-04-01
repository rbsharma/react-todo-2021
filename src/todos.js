import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoCard from "./todo-card";

const Todos = () => {
  const todos_url = "https://jsonplaceholder.typicode.com/todos";

  const [todoList, setTodoList] = useState();

  useEffect(() => {
    axios.get(todos_url).then((res) => {
      setTodoList(res.data);
    });
  }, []);

  return (
    <>
      {todoList ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todoList.slice(0, 5).map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
          )
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
