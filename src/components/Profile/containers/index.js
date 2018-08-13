import { connect } from 'react-redux';
import * as actions from 'modules/likes/actions';
import Profile from '../components';

const mapStateToProps = state => ({
  liked: state.liked,
});

export default connect(
  mapStateToProps,
  actions
)(Profile);
