import { useState } from "react";

const useSliderFormState = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [isValid, setIsValid] = useState(false);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setImagePreviewUrl("");
    setIsValid(false);
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    imagePreviewUrl,
    setImagePreviewUrl,
    isValid,
    setIsValid,
    resetForm,
  };
};

export default useSliderFormState;
