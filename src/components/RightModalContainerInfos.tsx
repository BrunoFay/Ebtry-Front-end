import React,{ReactNode} from 'react'

export default function RightModalContainerInfos({children,title}: {children:ReactNode,title:string}) {
  return (
    <div className='flex flex-col font-semibold items-center gap-4'>
    <span className='text-green-800'>{title}</span>
    {children}
  </div>
  )
}
