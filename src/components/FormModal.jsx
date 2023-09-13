import PropTypes from "prop-types";
import React, { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import useSliderFormState from "../hooks/useSliderForm";
import useSliderList from "../hooks/useSliderList";
import SliderForm from "./SliderForm";

function FormModal({ addProject, closeModal }) {
  // State Handling for the form at step 0
  const {
    title,
    setTitle,
    content,
    setContent,
    imagePreviewUrl,
    setImagePreviewUrl,
    isValid,
    setIsValid,
    resetForm,
  } = useSliderFormState();

  const { sliders, addSlider, slides, resetSliders } = useSliderList();

  const [step, setStep] = useState(0);

  const [sTitle, setStitle] = useState("");
  const [sContent, setScontent] = useState("");

  const resetSlideContent = () => {
    setScontent("");
    setStitle("");
    setImagePreviewUrl("");
  };

  //Move this into either context or localstorage hook
  const createSlider = () => {
    addProject({
      title: title,
      content: content,
      preview: sliders[0].imgUrl,
      slides: sliders,
    });
    resetForm();
    closeModal();
  };

  const showImgForm = () => {
    !validateStep() ? setIsValid(true) : setIsValid(false);
  };

  const handleImageChange = (e) => {
    setImagePreviewUrl(e.target.value);
  };

  // functions to forward a step or back up a step
  const validateStep = () => {
    return !title;
  };

  const addStep = () => {
    if (validateStep()) {
      console.log("Please add a title!");
    }
    if (!validateStep()) {
      if (step === 0) {
        setStep(step + 1);
      } else {
        setStep(step - 1);
      }
    }
  };

  return (
    <>
      <div
        id="defaultModal"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen md:inset-0  md:h-full"
      >
        <div className="relative p-4 w-full h-full   md:h-auto">
          <div
            className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 h-full"
            style={{ height: "95dvh" }}
          >
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add a new Slider
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => closeModal()}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form action="#" onSubmit={(event) => event.preventDefault()}>
              <div className="grid  grid-rows-1 gap-4 mb-4 sm:grid-cols-1">
                {step === 0 ? (
                  <>
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
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
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
                          // @ts-ignore
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="what best describes your slider?"
                          onChange={(event) => setContent(event.target.value)}
                          value={content}
                        ></textarea>
                      </div>
                    </div>
                  </>
                ) : (
                  <SliderForm
                    title={sTitle}
                    content={sContent}
                    setTitle={(text) => setStitle(text)}
                    setContent={(text) => setScontent(text)}
                    isValid={isValid}
                    slides={slides}
                    showImgForm={showImgForm}
                    handleImageChange={(e) => handleImageChange(e)}
                    imagePreviewUrl={imagePreviewUrl}
                    addSlide={() => {
                      addSlider(sTitle, sContent, imagePreviewUrl);
                      resetSlideContent();
                    }}
                    createSlider={() => {
                      createSlider();
                    }}
                  />
                )}

                <button
                  type="button"
                  className="row-span-1 inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={addStep}
                >
                  {step === 0 ? (
                    <>
                      <GrFormNextLink className="mr-2" /> <span>next step</span>
                    </>
                  ) : (
                    <>
                      <GrFormPreviousLink className="mr-2" />{" "}
                      <span>Prev step</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

FormModal.propTypes = {
  closeModal: PropTypes.func,
  addProject: PropTypes.func,
};

export default FormModal;
