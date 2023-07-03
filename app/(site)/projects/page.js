import React from 'react'
import Image from 'next/image';
// import Model from '../../Components/ProjectDetailModal';
// import Empty from '@/app/Components/data-not-found';
import ProjectLayout from '@/app/Components/projectLayout';

async function AllProjects() {
  let project = await fetch(`http://localhost:3000/api/project?category=all`,{
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
    <ProjectLayout project={project} />
  )
}

export default AllProjects