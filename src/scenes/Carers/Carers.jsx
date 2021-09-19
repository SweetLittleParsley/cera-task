import { useEffect, useState } from 'react';
import './Carers.css';
import Carer from '../../components/Carer/Carer'
import Header from '../../components/Header/Header'
import SchedulingModal from '../../components/SchedulingModal/SchedulingModal'
import { getCarers, getAvailableSlots, bookSlot } from '../../services/data/carers'

const formatSlot = slot => {
  const time = slot.split(':')
  let date = new Date()
  date.setHours(time[0])
  date.setMinutes(time[1])
  return date.toLocaleTimeString('en-US', { timeStyle: 'short' })
}

function Carers() {
  let [carers, setCarers] = useState([])
  let [activeCarer, setActiveCarer] = useState(false)
  let [carerAvailableSlots, setCarerAvailableSlots] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await getCarers()
      setCarers(data.carers)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!activeCarer) return

    async function fetchData() {
      const data = await getAvailableSlots()
      const formattedSlots = data.UTCAvailableSlots.map(slot => formatSlot(slot))
      setCarerAvailableSlots(formattedSlots)
    }
    fetchData()
  }, [activeCarer])

  const scheduler = (name, slot) => {
    bookSlot({carer: name, slot})
  }

  return (
    <main>
      <Header />
      <section className={'carer-list'}>
        {carers.map(carer => {
          return (
          <article className={`carer-list__item ${activeCarer ? 'carer-list__item--disabled' : ''}`} key={carer.photo}>
            <Carer name={carer.name} availableSlots={carer.slots} image={carer.photo} onClick={() => setActiveCarer(carer.name)} />
          </article>
          )
        })}
        {activeCarer && <div className='carer-list__modal' onClick={() => setActiveCarer('')}>
          <SchedulingModal name={activeCarer} slots={carerAvailableSlots} scheduler={scheduler} />
        </div>}
      </section>
    </main>
  );
}

export default Carers;
