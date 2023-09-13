import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

function Layout(props) {
  return (
    <div className='w-11/12 mx-auto'>
      <NavBar projects={props.projects} />
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
