import React from 'react'
import { ToggleButton, FormControl, MenuItem, Select, Checkbox, InputLabel, FormControlLabel} from '@mui/material'
import { ToggleButtonGroup } from '@mui/material'
import {BsThermometerHalf} from 'react-icons/bs'
import { RiWindyLine } from 'react-icons/ri'
import ChartOutputYear from '../components/ChartOutputYear'
import ChartOutputMon from '../components/ChartOutputMon'
import AqiOutput from '../components/AqiOutput'
import HeatWaveImage from '../components/HeatWaveImage'
import ScatterOutput from '../components/ScatterOutput'

//json imports

import City from '../data/json/City.json'
import HighCity from '../data/json/HighCity.json'
import AqiCity from '../data/json/AqiCity.json'


const Home = () => {

  const arr30= Array.from({length: 31}, (_, i) => i + 1)

  const arr365= Array.from({length: 365}, (_, i) => i + 1)
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const [output, setOutput] = React.useState('')

  const [city, setCity] = React.useState('')

  const [month, setMonth] = React.useState('0')

  const [duration, setDuration] = React.useState('')

  const handelChangeCity =(event)=>{
    setCity(event.target.value)
  }
  
  let Data
  let HighData
  let AqiData

  if(city === 1){
      Data = City.Adilabad
      HighData = HighCity.Adilabad
      AqiData = AqiCity.Adilabad
  }
  if(city === 2){
      Data = City.Karim
      HighData = HighCity.Karim
      AqiData = AqiCity.Karim
  }
  if(city === 3){
      Data = City.Nizam
      HighData = HighCity.Nizam
      AqiData = AqiCity.Nizam
  }
  if(city === 4){
      Data = City.Khammam
      HighData = HighCity.Khammam
      AqiData = AqiCity.Khammam
  }
  if(city === 5){
      Data = City.Warangal
      AqiData = AqiCity.Warangal
  }



  const [checked, setChecked] = React.useState(false)

  const handelChangeDuration =(event, newDuration)=>{
    setDuration(newDuration)
  }

  const handelChangeMonth =(event)=>{
    setMonth(event.target.value)
  }

  const handelChangeOutput = (event, newOutput)=>{
    setOutput(newOutput)
  }
  //For city selection



  let dataX = []

  //For selection of x axis

  if (output === 'HeatWave' && duration === 'monthly') {
    dataX = arr30
  }
  else if(output === 'HeatWave' && duration === 'yearly'){
    dataX = arr365
  }
  else if(output === 'AQI'){
    dataX = months
  }

  return (
    <div className='flex flex-col mt-8'>
      <div className='flex justify-between items-center'>
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


        <div className='w-200'> 
          <FormControl variant='standard' sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id='demo-simple-select-standard-label'>City</InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              value={city}
              onChange={handelChangeCity}
              label='Age'
            >
              <MenuItem value={1}>Adilabad</MenuItem>
              <MenuItem value={2}>Nizamabad</MenuItem>
              <MenuItem value={3}>Karimnagar</MenuItem>
              <MenuItem value={4}>Khammam</MenuItem>
              <MenuItem value={5}>Warangal</MenuItem>
            </Select>
          </FormControl>
        </div>
    
        {output==='HeatWave' && !checked &&
        <div className='w-[210px]'>
          <ToggleButtonGroup
            value={duration}
            exclusive
            onChange={handelChangeDuration}
            aria-label='Output'
            className='h-12 bg-cta w-max'
            size='large'
            sx={{ m: 1, minWidth: 200 }}
          >
            <ToggleButton value='monthly'>
              <div className='font-bold text-white'>Monthly</div>
            </ToggleButton>
            <ToggleButton value='yearly'>
              <div className='font-bold text-white'>Yearly</div>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        }


        <div className='w-[210px]'>
          {duration === 'monthly' && (
              <FormControl variant='standard' sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id='demo-simple-select-standard-label'>Month</InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                value={month}
                onChange={handelChangeMonth}
                label='Age'
              >
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                <MenuItem value={3}>March</MenuItem>
                <MenuItem value={4}>April</MenuItem>
                <MenuItem value={5}>May</MenuItem>
                <MenuItem value={6}>June</MenuItem>
                <MenuItem value={7}>July</MenuItem>
                <MenuItem value={8}>August</MenuItem>
                <MenuItem value={9}>September</MenuItem>
                <MenuItem value={10}>October</MenuItem>
                <MenuItem value={11}>November</MenuItem>
                <MenuItem value={12}>December</MenuItem>
              </Select>
            </FormControl>
          )
          }
        </div>
      </div>
      <div className='flex justify-between w-full'>
          {output==='HeatWave'&&
          <div className='flex my-8 items-center w-1/10'>
            <input onChange={()=>{setChecked(!checked)}} className='w-6 h-6 mr-4' type="checkbox" />
            <div className='text-text font-bold text-lg'>Show Heat Wave Plot</div>
          </div>
          }
      </div>
      {output==='HeatWave'&&city&&!checked&&duration==='monthly'&&<ChartOutputMon month={month} city={Data} data={dataX}  />}

      {output==='HeatWave'&&city&&!checked&&duration==='yearly'&&<ChartOutputYear city={Data} data={dataX}  />}

      {output==='AQI'&&city&&<AqiOutput city={AqiData} data={dataX}  />}

      {/* {output==='HeatWave'&&city&&checked&&<ScatterOutput city={HighData} data={dataX}  />} */}
      {output==='HeatWave'&&checked&&<HeatWaveImage city={city} />}
      
    </div>
  )
}

export default Home
