import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../module/TodoListActions'
import TodoItem from './TodoItem'
class TodoList extends React.Component{
    render(){
        const todoList = this.props.todos.map(
            ({id,text}) => (
              <TodoItem
                id={id}
                text={text}
              />
            )
          );
        return(
            <div>
                TodoList
                <input type="text" value={this.props.input} onChange={this.props.handleChange} />
                <button onClick={this.props.handleCreate}> create </button>
                {todoList}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        input: state.todoReducer.input,
        todos: state.todoReducer.todos
    }
}

const mapDispatchProps = (dispatch) =>{
    return{
        handleChange: (e) =>{dispatch(actions.change(e))},
        handleCreate: () =>{dispatch(actions.create())}
    }
}
export default connect (mapStateToProps,mapDispatchProps)(TodoList)