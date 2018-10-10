import { connect } from 'react-redux';
import { reset } from 'redux-form';
import CreateTodoFormSubmit from './CreateTodoFormSubmit';

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  reset: () => reset('todo'),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodoFormSubmit);
