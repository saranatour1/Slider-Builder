import React from "react";
import {AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types"; 
import {GiConfirmed} from "react-icons/gi"
import SharedInput from "./SharedInput";

function SliderForm({
  title,
  content,
  setTitle,
  setContent,
  isValid,
  slides,
  showImgForm,
  handleImageChange,
  imagePreviewUrl,
  addSlide,
  createSlider,
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Add a title to your <span>slide #{slides}</span>
      </h3>
      <div>
        <SharedInput
        onChangeTitle={(text)=>setTitle(text)}
        onChangeContent={(text)=> setContent(text)}
        titleValue={title}
        contentValue={content}
        onBlurEvent= {() => showImgForm()}
        />

        {isValid && (
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Paste a link to upload</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
              {imagePreviewUrl && (
                <div className="mt-4">
                  <img
                    src={imagePreviewUrl}
                    alt="Image Preview"
                    className="max-w-xs max-h-24 mx-auto"
                  />
                </div>
              )}
              <input
                id="dropzone-file"
                type="url"
                className=""
                placeholder="https://somedomain.com/image.imageformat"
                onChange={(e) => handleImageChange(e)}
                value={imagePreviewUrl}

              />
              <span >{imagePreviewUrl}</span>
            </label>
          </div>
        )}
        
        <div className="flex justify-between items-center">
        {slides >= 1 ? 
            <button type="button" className="mt-1 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
              <AiOutlinePlus
              className="h-4 w-4"
              onClick={()=>addSlide()}
              />
              <span className="sr-only">add a new slide</span>
            </button>
          : ""
      }

      {slides > 2 ? 
            <button type="button" className="mt-1  text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500" 
            onClick={()=> createSlider()}
            >

   
            <GiConfirmed             className="h-4 w-4"/>
            <span className="sr-only">go back a slide</span>
          </button>
          
          :"" }
        </div>


      </div>
    </div>
  );
}

SliderForm.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  slides: PropTypes.number.isRequired, 
  showImgForm: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  imagePreviewUrl: PropTypes.string,
  addSlide: PropTypes.func.isRequired,
  createSlider:PropTypes.func.isRequired,
};

export default SliderForm;
