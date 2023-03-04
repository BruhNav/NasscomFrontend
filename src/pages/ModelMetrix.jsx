import React from 'react'
import HeatWaveModel from '../components/HeatWaveModel'
import AqiModel from '../components/AqiModel'
import { ToggleButton, ToggleButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { BsThermometerHalf } from 'react-icons/bs'
import { RiWindyLine } from 'react-icons/ri'
import {images} from '../assets'

function createData(CityName, score1, score2, score3, score4) {
  return { CityName, score1, score2, score3, score4 }
}

const rows = [
    createData('Adilabad', 1.2, 1.3, 1.4, 1.5),
    createData('Karimnagar', 2.2, 2.3, 2.4, 2.5),
    createData('Nizamabad', 3.2, 3.3, 3.4, 3.5),
    createData('Khammam', 4.2, 4.3, 4.4, 4.5),
]

const { arcImg } = images

const ModelMetrix = () => {

    const [output, setOutput] = React.useState('AQI')

    const handelChangeOutput = (event, newOutput)=>{
        setOutput(newOutput)
    }


  return (
    <div className='flex flex-col justify-center items-center mt-8'>
        <div className='flex'>
            <ToggleButtonGroup
            value={output}
            exclusive
            onChange={handelChangeOutput}
            aria-label='Output'
            className='h-12 bg-cta w-max'
            size='large'
            >
            <ToggleButton value='AQI'>
                <BsThermometerHalf className='w-20' title='AQI' size={30} color='white'/>
            </ToggleButton>
            <ToggleButton value='HeatWave'>
                <RiWindyLine className='w-20' title='Heat Wave' size={30} color='white'/>
            </ToggleButton>
            </ToggleButtonGroup>
        </div>
        {output === 'HeatWave' && <HeatWaveModel />}
        {output === 'AQI' && <AqiModel />}

    </div>
  )
}

export default ModelMetrix