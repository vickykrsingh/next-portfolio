import React from 'react'
import Image from 'next/image';
// import Model from '@/app/Components/modal';
// import Empty from '@/app/Components/data-not-found';
import ProjectLayout from '@/app/Components/projectLayout';

async function Frontend() {
  let project = await fetch(`http://localhost:3000/api/project?category=frontend`,{
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

export default Frontend