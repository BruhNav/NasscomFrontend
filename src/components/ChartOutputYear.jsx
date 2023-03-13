import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import zoomPlugin, { resetZoom } from 'chartjs-plugin-zoom'

ChartJS.register(zoomPlugin)


const ChartOutputYear = (props) => {

    const chartRef = React.useRef(null)

    const resetZoomChart = () => {
        if (chartRef && chartRef.current) {
            chartRef.current.resetZoom();
        }
    }

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
    <div className='flex flex-col my-4 items-center'>
        <Line
            ref={chartRef}
            data={state}
            options={
                {
                scales:{
                    y:{
                        beginAtZero: true,
                    },
                    x:{
                        beginAtZero: true,
                    }
                },
                responsive: true,
                plugins:{
                    zoom:{
                        pan:{
                            enabled: true,
                            mode: 'xy',
                            speed: 10,
                            modifierKey: 'ctrl',
                        },
                        zoom:{
                            mode:'x',
                            wheel:{
                                // enabled: true,
                            },
                            drag:{
                                enabled: true,

                                mode:'x',
                                backgroundColor: 'rgba(225,99,132,0.2)',
                                borderColor: 'rgb(225,225,225)',
                                borderWidth: 1,
                                threshold: 50,
                            },
                        }
                        
                    }
                },
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
        <button className='bg-cta text-white font-semibold text-xl w-40 rounded h-12 my-4 ' onClick={resetZoomChart}>Reset Zoom</button>
    </div>
  )
}

export default ChartOutputYear