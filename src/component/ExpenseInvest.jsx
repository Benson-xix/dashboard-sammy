import React from 'react'
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineElement,CategoryScale,LinearScale,PointElement} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

const labels = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const options = {
    plugins: {
        legend:false
    },
    scales: {
        x: {
            grid: {
                display:false,
               
                // drawOnChartArea: false,
            }
        },

        y: {
            min: 0,
            max: 50,
            ticks:{
                stepSize:10,
                callback: (value) => value + 'k'
            },
            grid: {
                borderDash: [10],
                
                
            }
        }
    }

};
const data = {
    labels,
    datasets: [
    {
        label: 'Dataset 1',
        data: [23, 27, 26,23,33,29,33,32,39,37,40,38],
        backgroundColor: "#22B573",
        borderColor: "#22B573",
        pointBorderColor:"#070707",
        pointBackgroundColor:"#f8f7f7",
        pointStyle:"rect",
        pointBorderWidth: 1,
        tension: 0.6,
        fill: true,
        showLine: true,
    },
    {
        label: 'Dataset 2',
        data: [20, 24, 23, 27, 25, 27,26,30,37,35, 35,43],
        backgroundColor: "#7468E4",
        borderColor: "#7468E4",
        pointBorderColor:"#070707",
        pointBackgroundColor:"#f8f7f7",
        pointStyle:"rect",
        pointBorderWidth: 1,
        tension: 0.5,
        fill: true,
        showLine: true,
    }
    ]
}

const ExpenseInvest = () => {
   
  return (
    <div style={{width:"600px", height:"400px", marginLeft:".9em", marginTop:".8em" }}>
    <Line data={data} options={options}>
    </Line>
    
</div>
  )
}

export default ExpenseInvest