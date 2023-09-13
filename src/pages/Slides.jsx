import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

function Slides({ projects }) {
  const [currentProject, setCurrentProject] = useState({});
  const [step, setStep] = useState(0);
  const [currentSlide, setCurrentSlide] = useState({});

  const { title } = useParams();
  const navigate = useNavigate();

  const findProject = () => {
    const matchedProject = projects.find((item) => item.title === title);
    if (!matchedProject) {
      navigate('/');
    } else {
      setCurrentProject(matchedProject);
      setCurrentSlide(matchedProject.slides[step]);
    }
  };

  const moveLeft = () => {
    // Calculate the new step and handle wrap-around
    setStep((prevIndex) => (prevIndex - 1 + currentProject.slides.length) % currentProject.slides.length);
  };

  const moveRight = () => {
    // Calculate the new step and handle wrap-around
    setStep((prevIndex) => (prevIndex + 1) % currentProject.slides.length);
  };

  useEffect(() => {
    findProject();
  }, []); 

  useEffect(() => {
    if (currentProject.slides && currentProject.slides.length > 0) {
      setCurrentSlide(currentProject.slides[step]);
    }
  }, [step, currentProject]);

  return (
    <div className='mt-4'>
      <Link to="/" className='text-blue-300 mt-4'>
        Back
      </Link>

      <div>
        <hgroup>
          <h4 className='text-4xl font-extrabold dark:text-white'>
            {currentProject.title}
          </h4>
          <p className='my-4 text-lg text-gray-500'>
            {currentProject.content}
          </p>
        </hgroup>
      </div>

      <Carousel
        project={currentSlide}
        moveLeft={moveLeft}
        moveRight={moveRight}
      />
    </div>
  );
}

export default Slides;
