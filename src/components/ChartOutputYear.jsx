import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'


const ChartOutputYear = (props) => {

    const max = props.city ?.map((item) => item.temp_max)
    const min = props.city ?.map((item) => item.temp_min)


    const state ={

        labels: props.data,
        datasets:[
            {
                label: 'Maximum Predicted Temperature',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'red',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: max
            },
            {
                label: 'Minimum Predicted Temperature',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: min
            }
        ]
    }


  return (
    <div className='my-12 w-9/10'>
        <Line
            data={state}
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
            }}
        />
    </div>
  )
}

export default ChartOutputYear