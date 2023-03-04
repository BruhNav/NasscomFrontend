import React from 'react'
import { images } from '../assets'

const { karminagar, khammam, nizamad, warangal, adilabad } = images

const HeatWaveImage = (props) => {
    let imgSrc = 1
    if (props.city===1) {
        imgSrc = adilabad
    }
    else if (props.city===2) {
        imgSrc = nizamad
    }
    else if (props.city===3) {
        imgSrc = karminagar
    }
    else if (props.city===4) {
        imgSrc = khammam
    }
    else if (props.city===5) {
        imgSrc = warangal
    }
  return (
    <div className='my-6'>
        <img src={imgSrc} alt='HeatWave' />
    </div>
  )
}

export default HeatWaveImage