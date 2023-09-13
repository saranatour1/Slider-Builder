import PropTypes from "prop-types";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SmallProjectItem from "./SmallProjectItem";

function AsideBar({ projects, closeNav }) {
  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform  -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <AiOutlineClose
              className=" ml-auto"
              role="button"
              onClick={() => closeNav()}
            />
          </div>

          {projects.length > 0 ? (
            projects.map((item, idx) => (
              <SmallProjectItem
                key={idx}
                preview={item.slides[0].imgUrl}
                slideTitle={item.slides[0].title}
                content={item.content}
                title={item.title}
              />
            ))
          ) : (
            <p className="mt-3 font-medium text-center underline text-zinc-500">
              Nothing to See yet!
            </p>
          )}
        </div>
      </aside>
    </>
  );
}

AsideBar.propTypes = {
  closeNav: PropTypes.func,
  projects: PropTypes.array.isRequired,
};

export default AsideBar;
