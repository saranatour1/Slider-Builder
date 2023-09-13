import React from 'react';
import PropTypes from 'prop-types';

function SharedInput({onChangeTitle , titleValue, contentValue, onChangeContent ,onBlurEvent }) {
  return (
    <div className="">
    <label
      htmlFor="name"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      title
    </label>
    <input
      type="text"
      name="name"
      id="name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      placeholder="Type a title"
      onChange={(event)=> onChangeTitle(event.target.value)}
      onBlur={()=> onBlurEvent()}
      value={titleValue}
    />

    <div className="sm:col-span-2">
      <label
        htmlFor="description"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Description
      </label>
      <textarea
        id="description"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="what best describes your slider?"
        onChange={(event)=>onChangeContent(event.target.value)}
        value={contentValue}
      ></textarea>
    </div>
  </div>
  );
}

SharedInput.propTypes = {
  onChangeTitle: PropTypes.func.isRequired, 
  titleValue: PropTypes.string.isRequired,  
  contentValue: PropTypes.string.isRequired, 
  onChangeContent: PropTypes.func.isRequired, 
  onBlurEvent: PropTypes.func, 
};


export default SharedInput;