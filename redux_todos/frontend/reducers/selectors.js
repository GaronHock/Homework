// const allTodos = (state) => {
//   const todoKeys = Object.keys(state.todos);
//   const todos = todoKeys.map(todo => {
//     todo.id 
//   })
// }

const allTodos = ({todos}) => (
  Object.keys(todos).map(id => todos[id])
);

export default allTodos;

window.allTodos = allTodos;
