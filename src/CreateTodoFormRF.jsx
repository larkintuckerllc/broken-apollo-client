import { reduxForm } from 'redux-form';
import CreateTodoFormView from './CreateTodoFormView';

const validate = ({ title }) => {
  const errors = {};
  if (title === undefined) {
    errors.title = 'Required';
  } else if (title.trim() === '') {
    errors.title = 'Not Blank';
  }
  return errors;
};

const CreateTodoFormRF = reduxForm({
  form: 'todo',
  validate,
})(CreateTodoFormView);

export default CreateTodoFormRF;
