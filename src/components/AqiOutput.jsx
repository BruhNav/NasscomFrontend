import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'


const AqiOutput = (props) => {

    const max = props.city ?.map((item) => item.temp_max)
    const min = props.city ?.map((item) => item.temp_min)


    const state ={

        labels: props.data,
        datasets:[
            {
                label: 'Predicted AQI',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'red',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0.5,
                data: max
            }
        ]
    }


  return (
    <div className='pl-4 w-4/5'>
        <Line
            data={state}
            options={
                {
                    scales:{
                        y:{
                            beginAtZero: true,
                            ticks:{
                                font:{
                                    size: 16,
                                }
                            }
                            
                        },
                        x:{
                            beginAtZero: true,
                            ticks:{
                                font:{
                                    size: 16,
                                }
                            }
                        }
                    },
                    plugins:{
                        tooltip:{
                            titleFont:{
                                size: 20,
                            },
                            bodyFont:{
                                size: 16,
                            }
                        },
                    },
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

export default AqiOutput