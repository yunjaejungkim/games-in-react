import { connect } from 'react-redux';
import { updateName as updateNameAction } from '../../redux/hello/actions';
import Hello from './Hello';

const mapStateToProps = state => ({
    name: state
});

const mapDispatchToProps = dispatch => ({
    updateName: name => dispatch(updateNameAction(name))
});

const HelloContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);

export default HelloContainer;