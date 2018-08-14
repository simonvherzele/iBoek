import { connect } from 'react-redux';
import Profile from '../components';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  image: state.like.likes,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
