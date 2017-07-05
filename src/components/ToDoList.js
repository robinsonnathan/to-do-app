import React, {Component} from 'react';
import {connect} from 'react-redux'

export default class ToDoList extends Component {

  render() {
    return (
      <div>
        <h1>To Do List</h1>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    tasks: state.tasks}
}

connect(mapStateToProps) (ToDoList)
