import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'modules/unsplash/actions';
import Single from '../Single/index';
import Styled from './style';

class Photos extends React.Component {
  state = {
    pictures: [],
    selection: 'default',
  };

  async componentDidMount() {
    try {
      await this.props.fetchPictures(this.state.selection);
      const list = this.props.pictures.data.map(pic => (
        <Single
          name={pic.user.username}
          date={pic.created_at}
          url={pic.urls.regular}
          avatar={pic.user.profile_image.medium}
          key={pic.id}
        />
      ));
      this.setState({ pictures: list });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log('rendeuuur');
    return (
      <Styled>
        <div className="photos">
          {this.state.pictures}
          <button className="load">Meer Laden</button>
        </div>
      </Styled>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(Photos);
