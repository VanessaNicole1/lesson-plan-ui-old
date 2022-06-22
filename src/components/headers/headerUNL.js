import React from 'react'
import logoUNL from '../../public/img/logoUNL.png';
import logoCIS from '../../public/img/logoCIS.png';
import './headerUNL.css';

export const HeaderUNL = () => {
  return (
    <>
    <div className='containerHeaderUNL'>
        <img alt='img' src={logoUNL} className='imgLogoUNL' />
        <h1>PLAN DE CLASES</h1>
        <img alt='img' src={logoCIS} className='imgLogoCIS'></img>
    </div>
    </>
  )
}
