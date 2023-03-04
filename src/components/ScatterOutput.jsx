import React from 'react'
import { Scatter } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'


const ScatterOutput = (props) => {

  return(
    <div className='my-12'>
      <Scatter
      data={
        [{
          x: props.city?.map((item)=>item.cord),
          y: props.city?.map((item)=>item.val)
        }]
      }
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