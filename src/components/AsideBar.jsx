import React from "react";
import {AiOutlineClose} from "react-icons/ai"
import PropTypes from 'prop-types';
function AsideBar(props) {

  return (
    <>

      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-between items-center">
              <AiOutlineClose className=" ml-auto" role="button" onClick={()=> props.closeNav()} />
            </div>
        </div>
      </aside>


    </>
  );
}
AsideBar.propTypes ={
  closeNav: PropTypes.func,
}

export default AsideBar;
