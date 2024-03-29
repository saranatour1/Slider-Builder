import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

function Layout(props) {
  return (
    <main className='w-11/12 mx-auto'>
      <NavBar projects={props.projects} />
      {props.children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  projects: PropTypes.array.isRequired, 
};

export default Layout;
