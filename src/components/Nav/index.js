import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'modules/unsplash/actions';
import Styled from './style';
import Logo from '../Logo/index';
import Avatar from '../Avatar/index';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const selection = e.target.value;
    this.props.fetchPictures(selection);
  }

  render() {
    return (
      <Styled>
        <nav>
          <div className="topnav">
            <Logo />
            <Avatar />
          </div>
          <div className="lownav">
            <select onChange={this.handleChange}>
              <option value="default">Filter</option>
              <option value="foodies">Foodies</option>
              <option value="architectuur">Architectuur</option>
              <option value="peeps">Peeps</option>
              <option value="kunst">Kunst</option>
              <option value="natuur">Natuur</option>
            </select>
          </div>
        </nav>
      </Styled>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(Navigation);
