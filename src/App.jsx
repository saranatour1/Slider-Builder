import React from 'react'
import './App.css';
import './index.css';
import Layout from './layout/Layout';
import MainView from './pages/MainView';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  
  // initalising the Projects in the main App.
  const [projects, setProjects] = useState([]);


  
  const addProject = (projct) => {
    setProjects(prev => [
      ...prev,
      projct
    ])
  }

  useEffect(()=>{
    console.log(projects)
  },[projects])
  
  return (
    <Layout projects={projects}>
      <MainView addProject={(item)=>addProject(item)}/>
    </Layout>
  )
}

export default App;
