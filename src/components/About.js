import React from 'react';
import logo from '../assets/demo.png'; // Import the logo image

function About(props) {
  const { imageSrc, aboutText } = props;

  // eslint-disable-next-line no-unused-vars
  const unusedLogo = logo; // Add this line to suppress the warning

  return (
    <aside>
      <img src={imageSrc || logo} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;

