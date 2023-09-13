import React from 'react'
import './App.css';
import './index.css';
import Layout from './layout/Layout';
import MainView from './pages/MainView';
import {Routes , Route} from 'react-router-dom';
import Slides from './pages/Slides';
import useProjects from './hooks/useProjects';

function App() {
  // initalising the Projects in the main App.
  const {projects, addProject} = useProjects([]);
  return (
    <Layout projects={projects}>
      <Routes>
        <Route path='/' element={ <MainView addProject={(item)=>addProject(item)}/>}/>
        <Route path='/preview/:title' element={<Slides projects={projects}/>} />
      </Routes>

    </Layout>
  )
}

export default App;
