import React from 'react'
import { ToggleButton, FormControl, MenuItem, Select, InputLabel} from '@mui/material'
import { ToggleButtonGroup } from '@mui/material'
import ChartOutputYear from '../components/ChartOutputYear'
import AqiOutput from '../components/AqiOutput'
import HeatWavePlot from '../components/HeatWavePlot'

//json imports

import City from '../data/json/City.json'
import AqiCity from '../data/json/AqiCity.json'


const Home = () => {

  const arr365=['1 Jan','2 Jan','3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan','10 Jan','11 Jan','12 Jan','13 Jan','14 Jan','15 Jan','16 Jan','17 Jan','18 Jan','19 Jan','20 Jan','21 Jan','22 Jan','23 Jan','24 Jan','25 Jan','26 Jan','27 Jan','28 Jan','29 Jan','30 Jan','31 Jan','1 Feb','2 Feb','3 Feb', '4 Feb', '5 Feb', '6 Feb', '7 Feb', '8 Feb', '9 Feb','10 Feb','11 Feb','12 Feb','13 Feb','14 Feb','15 Feb','16 Feb','17 Feb','18 Feb','19 Feb','20 Feb','21 Feb','22 Feb','23 Feb','24 Feb','25 Feb','26 Feb','27 Feb','28 Feb','1 Mar','2 Mar','3 Mar', '4 Mar', '5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar','10 Mar','11 Mar','12 Mar','13 Mar','14 Mar','15 Mar','16 Mar','17 Mar','18 Mar','19 Mar','20 Mar','21 Mar','22 Mar','23 Mar','24 Mar','25 Mar','26 Mar','27 Mar','28 Mar','29 Mar','30 Mar','31 Mar','1 Apr','2 Apr','3 Apr', '4 Apr', '5 Apr', '6 Apr', '7 Apr', '8 Apr', '9 Apr','10 Apr','11 Apr','12 Apr','13 Apr','14 Apr','15 Apr','16 Apr','17 Apr','18 Apr','19 Apr','20 Apr','21 Apr','22 Apr','23 Apr','24 Apr','25 Apr','26 Apr','27 Apr','28 Apr','29 Apr','30 Apr','1 May','2 May','3 May', '4 May', '5 May', '6 May', '7 May', '8 May', '9 May','10 May','11 May','12 May','13 May','14 May','15 May','16 May','17 May','18 May','19 May','20 May','21 May','22 May','23 May','24 May','25 May','26 May','27 May','28 May','29 May','30 May','31 May','1 Jun','2 Jun','3 Jun', '4 Jun', '5 Jun', '6 Jun', '7 Jun', '8 Jun', '9 Jun','10 Jun','11 Jun','12 Jun','13 Jun','14 Jun','15 Jun','16 Jun','17 Jun','18 Jun','19 Jun','20 Jun','21 Jun','22 Jun','23 Jun','24 Jun','25 Jun','26 Jun','27 Jun','28 Jun','29 Jun','30 Jun','1 Jul','2 Jul','3 Jul', '4 Jul', '5 Jul', '6 Jul', '7 Jul', '8 Jul', '9 Jul','10 Jul','11 Jul','12 Jul','13 Jul','14 Jul','15 Jul','16 Jul','17 Jul','18 Jul','19 Jul','20 Jul','21 Jul','22 Jul','23 Jul','24 Jul','25 Jul','26 Jul','27 Jul','28 Jul','29 Jul','30 Jul','31 Jul','1 Aug','2 Aug','3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug','10 Aug','11 Aug','12 Aug','13 Aug','14 Aug','15 Aug','16 Aug','17 Aug','18 Aug','19 Aug','20 Aug','21 Aug','22 Aug','23 Aug','24 Aug','25 Aug','26 Aug','27 Aug','28 Aug','29 Aug','30 Aug','31 Aug','1 Sept','2 Sept','3 Sept', '4 Sept', '5 Sept', '6 Sept', '7 Sept', '8 Sept', '9 Sept','10 Sept','11 Sept','12 Sept','13 Sept','14 Sept','15 Sept','16 Sept','17 Sept','18 Sept','19 Sept','20 Sept','21 Sept','22 Sept','23 Sept','24 Sept','25 Sept','26 Sept','27 Sept','28 Sept','29 Sept','30 Sept' ,'1 Oct','2 Oct','3 Oct', '4 Oct', '5 Oct', '6 Oct', '7 Oct', '8 Oct', '9 Oct','10 Oct','11 Oct','12 Oct','13 Oct','14 Oct','15 Oct','16 Oct','17 Oct','18 Oct','19 Oct','20 Oct','21 Oct','22 Oct','23 Oct','24 Oct','25 Oct','26 Oct','27 Oct','28 Oct','29 Oct','30 Oct','31 Oct','1 Nov','2 Nov','3 Nov', '4 Nov', '5 Nov', '6 Nov', '7 Nov', '8 Nov', '9 Nov','10 Nov','11 Nov','12 Nov','13 Nov','14 Nov','15 Nov','16 Nov','17 Nov','18 Nov','19 Nov','20 Nov','21 Nov','22 Nov','23 Nov','24 Nov','25 Nov','26 Nov','27 Nov','28 Nov','29 Nov','30 Nov','1 Dec','2 Dec','3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec', '8 Dec', '9 Dec','10 Dec','11 Dec','12 Dec','13 Dec','14 Dec','15 Dec','16 Dec','17 Dec','18 Dec','19 Dec','20 Dec','21 Dec','22 Dec','23 Dec','24 Dec','25 Dec','26 Dec','27 Dec','28 Dec','29 Dec','30 Dec','31 Dec']
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const [output, setOutput] = React.useState('')

  const [city, setCity] = React.useState('')


  const handelChangeCity =(event)=>{
    setCity(event.target.value)
  }
  
  let Data
  let AqiData

  if(city ===1){
      Data = City.Adilabad
      AqiData = AqiCity.Adilabad
  }
  if(city ===2){
      Data = City.Karim
      AqiData = AqiCity.Karim
  }
  if(city ===3){
      Data = City.Nizam
      AqiData = AqiCity.Nizam
  }
  if(city === 4){
      Data = City.Khammam
      AqiData = AqiCity.Khammam
  }
  if(city === 5){
      Data = City.Warangal
      AqiData = AqiCity.Warangal
  }



  const [checked, setChecked] = React.useState(false)

  const handelChangeOutput = (event, newOutput)=>{
    setOutput(newOutput)
  }
  //For city selection



  let dataX = []

  //For selection of x axis
  if(output === 'HeatWave'){
    dataX = arr365
  }
  else if(output === 'AQI'){
    dataX = months
  }

  return (
    <div className='flex mt-8 mx-20'>
      <div className='flex flex-col w-1/5 pr-4'>
      <div className='justify-start mt-4 text-xl font-bold'>Please select between <span className='text-cta mr-1'> AQI </span> and <span className='text-cta mx-1'> Heat Wave </span>to get started</div>
        <ToggleButtonGroup
          value={output}
          exclusive
          onChange={handelChangeOutput}
          aria-label='Output'
          className='h-16 mt-8 bg-cta'
          size='large'
          sx={{ width: '100%' }}
        >
          <ToggleButton sx={{width:'50%'}} value='AQI'>
            <div className='text-white font-semibold text-xl'>AQI</div>
          </ToggleButton>
          <ToggleButton sx={{width:'50%'}} value='HeatWave'>
            <div className='text-white font-semibold text-lg'>Heat Wave</div>
          </ToggleButton>
        </ToggleButtonGroup>


        <FormControl variant='standard' sx={{ mt: 4,width:'100%' }}>
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
          {output==='HeatWave'&&
          <div className='flex my-8 items-center w-[100%]'>
            <input checked={checked} onChange={()=>{setChecked(!checked)}} className='w-6 h-6 mr-2' type="checkbox" />
            <div className='text-text font-bold text-lg'>Show Heat Wave Plot</div>
          </div>
          }
      </div>
      {output==='HeatWave'&&city&&!checked&&<ChartOutputYear city={Data} data={dataX}  />}
      {output==='HeatWave'&&city&&checked&&<HeatWavePlot city={Data} data={dataX}/>}

      {output==='AQI'&&city&&<AqiOutput city={AqiData} data={dataX}  />}
      
    </div>
  )
}

export default Home
