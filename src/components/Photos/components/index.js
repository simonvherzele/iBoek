import React from 'react';
import Single from 'components/Single';
import PropTypes from 'prop-types';
import Styled from '../style';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 2,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState({
      limit: this.state.limit + 2,
    });
  }

  render() {
    return (
      <Styled>
        <div className="photos">
          {this.props.images.slice(0, this.state.limit).map(image => (
            <Single
              date={image.created_at}
              name={image.user.username}
              avatar={image.user.profile_image.medium}
              url={image.urls.regular}
              key={image.id}
              id={image.id}
            />
          ))}
          <button className="load" onClick={this.loadMore}>
            Meer Laden
          </button>
        </div>
      </Styled>
    );
  }
}

Photos.defaultProps = {
  images: [],
};

Photos.propTypes = {
  images: PropTypes.array,
};

export default Photos;
