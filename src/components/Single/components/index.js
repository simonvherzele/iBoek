import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import Styled from '../style';

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = { testclass: '' };
    this.handleDblClick = this.handleDblClick.bind(this);
  }

  handleDblClick() {
    const likedImage = this.props.image;
    this.setState({
      testclass: 'active',
    });
    this.props.like(likedImage);
  }

  // key={image.id}
  // id={image.id}

  render() {
    const time = `${this.props.image.created_at}`;
    const classes = classnames('img', `${this.state.testclass}`);
    return (
      <Styled>
        <div className="post">
          <div className="header">
            <div className="info">
              <h1>{this.props.image.user.username}</h1>
              <h2>{moment(time).format('DD/MM/YYYY')}</h2>
            </div>
            <div className="ava">
              <img src={this.props.image.user.profile_image.medium} alt="" />
            </div>
          </div>
          <div className={classes} onDoubleClick={this.handleDblClick}>
            <img src={this.props.image.urls.regular} alt="" />
            <div className="after">
              <span className="helper" />
              <img src="/images/like.png" alt="" />
            </div>
          </div>
        </div>
      </Styled>
    );
  }
}

export default Single;
