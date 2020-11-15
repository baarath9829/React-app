import React from 'react';
import CanvasJSReact from './canvasjs.react'


const Graph = ({data}) => {
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        animationEnabled: true,
        //exportEnabled: true,
        theme: "dark2",
        title:{
            text: "Burn Out Chart"
        },
        axisY: {
            title: "Amount",
            suffix: "Rs"
        },
        axisX: {
            title: "day in month",
            prefix: "D",
            interval: 1
        },
        data: [{
            type: "line",
            toolTipContent: "Day {x}: {y}Rs",
            dataPoints: data
        }]
    }

    return(
        <div className="Graph">
            <CanvasJSChart options = {options}/>
        </div>
    );
}

export default Graph;