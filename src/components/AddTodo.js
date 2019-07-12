import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                dispatch(actions.addTodo(input.value));
                input.value = '';
            }}>
                Add Todo
        </button>
        </div>
    );
};
AddTodo = connect()(AddTodo);

export default AddTodo;