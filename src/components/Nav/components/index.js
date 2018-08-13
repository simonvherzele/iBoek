import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'components/Logo';
import Avatar from 'components/Avatar';
import Styled from '../style';

class Navigation extends React.Component {
  componentWillMount() {
    this.props.fetchPictures('973957');
  }

  handleChange = e => {
    const selection = e.target.value;
    this.props.fetchPictures(selection);
  };

  render() {
    return (
      <Styled>
        <nav>
          <div className="topnav">
            <Logo />
            <Avatar />
          </div>
          <div className="lownav">
            <select onChange={e => this.handleChange(e)}>
              <option value="973957">Filter</option>
              <option value="160213">Foodies</option>
              <option value="2148809">Architectuur</option>
              <option value="302501">Peeps</option>
              <option value="195845">Kunst</option>
              <option value="319663">Natuur</option>
            </select>
          </div>
        </nav>
      </Styled>
    );
  }
}

Navigation.propTypes = {
  fetchPictures: PropTypes.func.isRequired,
};

export default Navigation;
