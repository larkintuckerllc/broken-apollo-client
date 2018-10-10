import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

class CreateTodoView extends Component {
  inputEl;

  handleSubmit = (e) => {
    e.preventDefault();
    const { createTodo } = this.props;
    const title = this.inputEl.value.trim();
    if (!title) return;
    createTodo({ variables: { title } });
    this.inputEl.value = '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={node => { this.inputEl = node; }} />
          <button type="submit">Create Todo</button>
        </form>
      </div>
    );
  }
}

CreateTodoView.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default CreateTodoView;
