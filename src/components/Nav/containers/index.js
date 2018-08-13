import { connect } from 'react-redux';
import { fetchPictures } from 'modules/unsplash/actions';
import Navigation from '../components';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchPictures: collectionId => {
    dispatch(fetchPictures(collectionId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
