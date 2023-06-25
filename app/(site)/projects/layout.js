import ProjectTab from '@/app/Components/ProjectTab'
import React from 'react'

function layout({children}) {
  return (
    <>
        <ProjectTab/>
        {children}
    </>
  )
}

export default layout