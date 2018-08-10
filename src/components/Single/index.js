import React from 'react';
import Styled from './style';
import moment from 'moment';

class Single extends React.Component {
  render() {
    const time = `${this.props.date}`;
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
          <div className="img">
            <img src={this.props.url} alt="" />
          </div>
        </div>
      </Styled>
    );
  }
}

export default Single;
