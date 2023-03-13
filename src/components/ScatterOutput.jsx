import React from 'react'
import { Scatter } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import NizamCord from '../data/json/Nizam_HeatWave.json'


const ScatterOutput = (props) => {

  const data = {
    datasets:[
      {
        label: 'Heatwave',
        data: NizamCord,
        backgroundColor: 'rgba(255, 99, 132, 1)',
      }

    ]
  }

  return(
    <div className='my-12'>
      <Scatter
      data={data}
      options={
        {
          responsive: true,
          title:{
            display:true,
            text:'AQI and HeatWave',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }
      }
      />
    </div>
  )
}

export default ScatterOutput