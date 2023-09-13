import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom"

function AsideBar({ projects, closeNav }) {
  console.log(projects);
  useEffect(() => {
    console.log(projects[0]?.slides[0]?.imgUrl);
  }, [projects]);

  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
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

          {projects.length > 0
            ? projects.map((item, idx) => (
                <div
                  key={idx}
                  className=" mt-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#" className="flex justify-center items-center">
                    <img
                      className="object-cover w-full rounded-t-lg rounded-lg z-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={item.preview}
                      alt={item.slides[0].title}
                    />
                  </a>
                  <div className="p-5">
                    <Link to={`/preview/${item.title}`}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))
            : "Nothing to see yet"}
        </div>
      </aside>
    </>
  );
}
AsideBar.propTypes = {
  closeNav: PropTypes.func,
  projects: PropTypes.arrayOf({
    title: PropTypes.string,
    content: PropTypes.string,
    slides: PropTypes.arrayOf({
      title: PropTypes.string,
      content: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  }),
};

export default AsideBar;
