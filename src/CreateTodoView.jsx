import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

class CreateTodoView extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { createTodo } = this.props;
    const title = this.inputEl.value.trim();
    if (!title) return;
    createTodo({ variables: { title } });
    this.inputEl.value = '';
  };

  inputEl;

  render() {
    const { error, loading } = this.props;
    return (
      <div>
        {error && <div>Error</div>}
        <form onSubmit={this.handleSubmit}>
          <input
            ref={node => {
              this.inputEl = node;
            }}
          />
          <button type="submit" disabled={loading}>
            Create Todo
          </button>
        </form>
      </div>
    );
  }
}

CreateTodoView.propTypes = {
  error: PropTypes.bool.isRequired,
  createTodo: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CreateTodoView;
