import { connect } from 'react-redux';
import { updateName } from '../../redux/action';
import Hello from './Hello';

const mapStateToProps = state => ({
    name: state
});

const mapDispatchToProps = dispatch => ({
    updateName: name => dispatch(updateName(name))
});

const HelloContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);

export default HelloContainer;