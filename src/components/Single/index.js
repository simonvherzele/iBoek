import React from 'react';
import Styled from './style';

class Single extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <Styled>
        <div className="post">
          <div className="header">
            <div className="info">
              <h1>{this.props.name}</h1>
              <h2>{this.props.date}</h2>
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
