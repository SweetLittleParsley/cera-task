import React from 'react'
import './SchedulingModal.css'

const SchedulingModal = ({ name, slots, scheduler }) => {
  return (
    <div className='scheduling-modal' onClick={(event) => event.stopPropagation()}>
      <p className='scheduling-modal__title'>Schedule Carer</p>
      <p className='scheduling-modal__name'>{name}</p>
      {slots.map(slot => {
        return <button className='scheduling-modal__action' key={slot} onClick={scheduler}>{slot}</button>
      })}
    </div>
  )
}

export default SchedulingModal
