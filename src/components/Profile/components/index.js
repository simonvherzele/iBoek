import React from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import Single from 'components/Single';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.image.map(image => (
          <Single image={image} key={image.id} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default Profile;
