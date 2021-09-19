import React from 'react'
import './Header.css'
import logo from "../../images/cera-logo.png"
import Clock from 'react-live-clock';

const Header = () => {
  return (
    <header className='header'>
        <img className={'header__logo'} src={logo} alt='cera logo'></img>
        <div className={'header__headline'}>
          <p className={'header__title'}>Carers</p>
          <p className={'header__intro'}>Here you'll be able to schedule your carers visits</p>
        </div>
        <Clock format={'HH:mm A'}ticking={true} className={'header__clock'} />
    </header>
  )
}

export default Header
