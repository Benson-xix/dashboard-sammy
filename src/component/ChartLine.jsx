import React from 'react'
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineElement,CategoryScale,LinearScale,PointElement} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

const ChartLine = () => {
    const data = {
        labels:[ "dec 2","dec 3", "dec 4", "dec 5", "dec 6", "dec 7", "dec 8",],
        datasets: [{
            data:[0.7, 1.6, 1.3,2.5, 1.9, 3, 3.5, ],
            backgroundColor: '#22B573',
            borderColor: "#22B573",
            border:"none",
            pointBorderColor:"#070707",
            pointBackgroundColor:"#f8f7f7",
            pointStyle:"rect",
            pointBorderWidth: 1,
            tension: 0.5,
            fill: true,
            showLine: true,
        }]
    };

    const options = {
        plugins: {
            tooltip: {
                enabled: true,
                displayColors: false,
              },
            legend:{
                display: false,
            },
        },
        scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#070707',
                font: {
                  size: 12,
                  weight: 'bold',
                },
              },
            },

            y: {
                min: 0,
                max: 4,
                ticks:{
                    stepSize:1,
                    callback: (value) => value + 'k',
                    color: '#070707',
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                },
                grid: {
                    borderDash: [10],
                     display:false,
                     color: '#f8f7f7',
                     borderColor: '#f8f7f7',
                }
            }
        }

    };


  return (
    <div className='thefirst' style={{width:"400px", height:"300px", marginLeft:".9em", marginTop:".8em" }}>
        <Line data={data} options={options}>
        </Line>
    </div>
  )
}

export default ChartLine