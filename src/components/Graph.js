//import {useState} from 'react';
import CanvasJSReact from './canvasjs.react'


const Graph = ({chartdata,initialAmount}) => {
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    let data = [];
    let obj = {
        x : 0,
        y : initialAmount
    }
    data = [...data,obj];
    let lasty = initialAmount;
    for(let element of chartdata.sort((a,b) => (a.day > b.day)? 1 : -1)){
        let obj = {
            x : element.day,
            y : lasty - element.expense
        }
        //setData([...data,obj])
        data = [...data,obj]
        lasty = lasty - element.expense
    }
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