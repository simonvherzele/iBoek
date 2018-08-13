import React from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import Single from 'components/Single';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Single />
        <Footer />
      </div>
    );
  }
}

export default Profile;
