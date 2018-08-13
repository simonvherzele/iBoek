import { connect } from 'react-redux';
import * as actions from 'modules/likes/actions';
import Single from '../components';

const mapStateToProps = state => ({
  likes: state.likes,
});

export default connect(
  mapStateToProps,
  actions
)(Single);
