import React from "react"

const Item = ({ todo }) => {
  return (
    <div className="list">
      <ul className="list-items">
        <h1>{todo.title}</h1>
        <li>{todo.body}</li>
        <li>{`${todo.done}`}</li>
      </ul>
    </div>
  );
};

export default Item