import React from 'react';
import Single from '../Single/index';
import Styled from './style';
import Api from 'utils/Api';

class Photos extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await Api.get('/collections/573226/photos');
      const list = response.data.map(pic => {
        console.log(pic);
        return (
          <Single
            name={pic.user.username}
            date={pic.created_at}
            url={pic.urls.regular}
            avatar={pic.user.profile_image.medium}
            key={pic.id}
          />
        );
      });
      this.setState({ pictures: list });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
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

export default Photos;
