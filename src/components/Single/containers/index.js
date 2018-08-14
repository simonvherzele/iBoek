import { connect } from 'react-redux';
import { addLike } from 'modules/like/actions';
import Single from '../components';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  like: image => {
    dispatch(addLike(image));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);
