import { useState } from "react";

const useSliderList = () => {
  const [sliders, setSliders] = useState([]);
  const [slides, setSlides] = useState(1);

  const addSlider = (sTitle, sContent, imgUrl) => {
    if (imgUrl) {
      setSliders((prevSliders) => [
        ...prevSliders,
        {
          title: sTitle,
          content: sContent,
          imgUrl: imgUrl,
        },
      ]);
      setSlides(slides + 1);
    }
  };

  const resetSliders = () => {
    setSliders([]);
    setSlides(1);
  };

  return {
    sliders,
    addSlider,
    slides,
    resetSliders,
  };
};

export default useSliderList;
