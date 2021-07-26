import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, deletedItem } = props;

  const [completed, setCompleted] = useState(props.completed);

  const handleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div
      className="d-flex justify-content-end align-items-center"
      onClick={handleCompleted}
    >
      <span className={completed === true ? "completed" : ""}>{content}</span>
      <button onClick={deletedItem} className="btn btn-danger button">
        Sil
      </button>
    </div>
  );
}

export default Todo;
