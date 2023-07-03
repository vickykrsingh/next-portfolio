import React from 'react'
import ProjectLayout from '@/app/Components/projectLayout';

async function FullStack() {
  let project = await fetch(`http://localhost:3000/api/project?category=fullstack`,{
    cache:'no-store',
    method:'GET',
    headers:{
      'Content-type':'application/json'
    }
  })
  if(project.ok){
    project = await project.json();
  }
  return (
    <ProjectLayout project={project}/>
  )
}

export default FullStack