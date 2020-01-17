import {connect} from 'react-redux';
import List from './todo_list';
import allTodos from '../../reducers/selectors'
import {receiveTodo} from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return {todos: allTodos(state)} ////this.props.todos   /// global state // sety up keys on presentational component props
  //set up key for global state
};

const mapDispatchToProps = (dispatch) => ({
  requestTodo: todo => dispatch(receiveTodo(todo)) // action invoked have access on this.props.requestTodo
  //set up key to dispatch action that you have created in action directory 
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);