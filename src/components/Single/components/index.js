import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styled from '../style';

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = { testclass: '' };
    this.handleDblClick = this.handleDblClick.bind(this);
  }

  handleDblClick() {
    const imageId = this.props.id;
    console.log(imageId);
    this.setState({
      testclass: 'active',
    });
    this.props.like(imageId);
  }

  render() {
    const time = `${this.props.date}`;
    const classes = classnames('img', `${this.state.testclass}`);
    return (
      <Styled>
        <div className="post">
          <div className="header">
            <div className="info">
              <h1>{this.props.name}</h1>
              <h2>{moment(time).format('DD/MM/YYYY')}</h2>
            </div>
            <div className="ava">
              <img src={this.props.avatar} alt="" />
            </div>
          </div>
          <div className={classes} onDoubleClick={this.handleDblClick}>
            <img src={this.props.url} alt="" />
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

Single.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  like: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Single;
