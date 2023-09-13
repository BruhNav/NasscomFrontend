import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import zoomPlugin from 'chartjs-plugin-zoom'

ChartJS.register(zoomPlugin)


const HeatWavePlot = (props) => {

    const chartRef = React.useRef(null)

    const resetZoomChart = () => {
        if (chartRef) {
            chartRef.current.resetZoom();
        }
    }

    const maxRol = props.city ?.map((item) => item.max_rol)
    const colorSeq = props.city ?.map((item) => item.color)


    const data ={

        labels: props.data,
        datasets:[
            {
                label: 'Normal',
                fill: false,
                lineTension: 0.5,
                backgroundColor: colorSeq,
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0.5,
                data: maxRol
            },
            {
                label: 'Heat Wave',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#1174ff',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0.5,
                data: []
            },
            {
                label: 'Severe Heatwave',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#FD1C03',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0.5,
                data: []
            }
        ]
    }


  return (
    <div className='flex flex-col ml-4 w-4/5 items-center'>
        <Line
            ref={chartRef}
            data={data}
            options={
                {
                scales:{
                    y:{
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
                responsive: true,
                plugins:{
                    tooltip:{
                        titleFont:{
                            size: 20,
                        },
                        bodyFont:{
                            size: 16,
                        }
                    },
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
                                enabled: true,
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
                    position:'right',
                }
            }}
        />
        <button 
            className='bg-cta text-white font-semibold text-xl w-40 rounded h-12 my-4 ' 
            onClick={resetZoomChart}>Reset Zoom
        </button>
    </div>
  )
}

export default HeatWavePlot