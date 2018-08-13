import { connect } from 'react-redux';
import * as actions from 'modules/unsplash/actions';
import Photos from '../components';

const mapStateToProps = state => ({
  images: state.unsplash.pictures,
});

export default connect(
  mapStateToProps,
  actions
)(Photos);
