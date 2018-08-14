import { connect } from 'react-redux';
import Photos from '../components';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  images: state.unsplash.pictures,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
