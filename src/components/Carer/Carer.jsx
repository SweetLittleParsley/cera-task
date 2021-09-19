import React from 'react'
import styles from './Carer.css'


const Carer = ({ image, name, availableSlots, onClick }) => {
  return (
    <div className={styles.carer}>
      <img src={image} className='carer__image' alt={name}></img>
      <div className='carer__bottom-info'>
        <div className='carer__details'>
          <p className='carer__name'>{name}</p>
          <p className='carer__availability'>{availableSlots} slots available</p>
        </div>
        <button className='carer__action' onClick={onClick}>Check Availability</button>
      </div>
    </div>
  )
}

export default Carer
