import React, { useState } from "react";
import FormModal from "../components/FormModal";

function MainView(props) {
  // functions to open the actual form 
  const [openModal, setOpenModal] = useState(false);

  const openSliderForm =()=>{
    // console.log(openModal);
    setOpenModal(!openModal);
  }

  return (
    <div className="grid place-items-center h-screen -mt-12">
      <div className="w-full p-8 col-span-2 justify-center justify-self-center mx-auto  text-center text-lg">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 hover:underline hover:underline-offset-3 hover:decoration-8 hover:decoration-blue-400 dark:decoration-blue-600 transition-all hover:cursor-pointer">
            Slider Builder
          </span>
        </h1>

        <div className="flex justify-center m-5">
          <button id="defaultModalButton" data-modal-toggle="defaultModal" className="block  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button" 
          onClick={()=>openSliderForm()}
          >
          Create product
          </button>
      </div>
      {openModal &&  <FormModal closeModal={()=>openSliderForm()}/>}


      </div>
    </div>
  );
}

export default MainView;
