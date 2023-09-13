import { useState } from 'react';

/**
 * custom React hook, for managing Projects - Slides
 * @param {Array} initialProjects 
 * @returns ({
 *  projects: Array,
 *  addProject: Function,
 * 
 * })
 */

function useProjects(initialProjects = []) {
  const [projects, setProjects] = useState(initialProjects);

  const addProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  return { projects, addProject };
}

export default useProjects;
