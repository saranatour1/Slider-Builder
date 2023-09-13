import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function SmallProjectItem({ preview, title, slideTitle, content }) {
  return (
    <div className=" mt-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="flex justify-center items-center">
        <img
          className="object-cover w-full rounded-t-lg rounded-lg z-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={preview}
          alt={slideTitle}
        />
      </a>
      <div className="p-5">
        <Link to={`/preview/${title}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
    </div>
  );
}

SmallProjectItem.propTypes = {
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slideTitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SmallProjectItem;
