import React, { Suspense } from 'react'
import Image from 'next/image';
import Model from '@/app/Components/ProjectDetailModal';
import Empty from '@/app/Components/data-not-found';

function ProjectLayout({project}) {
  return (
    !project || project?.project?.length==0 || !project ? <Empty/> : 
    <div className='main-container w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 '>
      {
        project.project.length==0 ? <Empty/> : project.project.map((p)=>(
          <Suspense fallback={<span>loading...</span>}>
          <div className='w-[250px] h-fit p-2 bg-neutral-300 rounded-md shadow-lg'>
            <Image src={p.image.url} width={250} height={100} alt={p.title} className='hover:brightness-90 cursor-pointer' />
            <Model data={p} />
          </div>
          </Suspense>
        ))
      }
    </div>
  )
}

export default ProjectLayout