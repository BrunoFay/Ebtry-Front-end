import React from 'react'
import { Api } from '../types/api'
import FrameCard from './BoardCard'

export default function BoardColum(props: { CardsArrayFiltred: Api[] }) {
  return (
    <div className='frameStage-container border-r-2 gap-2 w-full items-center flex flex-col justify-around'>
      <div className=' flex gap-5 flex-col items-center min-h-full min-w-full '>
        {props.CardsArrayFiltred.map(item => (<FrameCard cardInfos={item} />))}
      </div>
    </div>
  )
}
