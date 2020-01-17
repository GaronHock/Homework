import React from 'react';
import Item from './todo_list_item'


const List = ({ todos, requestToDo }) => {
  const listItems = todos.map((todo,idx) => <Item key={idx} todo={todo}/> )
  return (
    <div className="list">
      <ul className="list-items">{listItems}</ul>
    </div>
  );
};
export default List
