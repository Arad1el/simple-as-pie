import React, { JSX } from "react";
import { DataSet } from "../../interfaces";

export interface PieChartProps {
    data: DataSet[];
    x: number;
    y: number;
    radius: number;
    backgroundColour?: string;
}

export type Coordinates = {
    x: number;
    y: number;
}

const PieChart = (props: PieChartProps) => {
    const {data, x, y, radius, backgroundColour} = props;
    const sum = data.reduce((a, b) => a + b.value, 0);
    let rotation = -90;
    let segments: JSX.Element[] = [];

    if (backgroundColour !== undefined) {
        segments.push(<circle className="SimplePieChart-background-segment" key="background"
            cx="0" cy="0" r="1" fill={backgroundColour} />);
    }

    const getCoordsForPercentage = (percent: number): Coordinates => {
        const xVal = Math.cos(2 * Math.PI * percent);
        const yVal = Math.sin(2 * Math.PI * percent);

        return {
            x: xVal,
            y: yVal
        };
    }

    let startCoords = {
        x: 1,
        y: 0
    };

    data.map((dataEntry, index) => {
        if (dataEntry.value === sum) {
            segments.push(<circle className="SimplePieChart-segment" key={index}
                cx="0" cy="0" r="1" fill={dataEntry.colour}
                {...dataEntry.events} />);
        }
        else {
            const proportion = (dataEntry.value/sum);
            const endCoords = getCoordsForPercentage(proportion);
            const arcFlag = proportion < 0.5 ? 0 : 1;
            
            segments.push(<path className="SimplePieChart-segment" key={index}
                d={`M 1 0 A 1 1 0 ${arcFlag} 1 ${endCoords.x} ${endCoords.y} L 0 0`}
                fill={dataEntry.colour}
                strokeWidth="1" stroke={dataEntry.colour}
                style={{transform: `rotate(${rotation}deg)`, transformOrigin: `0 0`}}
                {...dataEntry.events} />);
            
            startCoords = endCoords;
            rotation += proportion * 360;
        }        
    })

    return(
        <g className="SimplePieChart" style={{scale: radius, translate: `${x}px ${y}px`}}>
            {segments.map((segment) => segment)}
        </g>
    )
}

export default PieChart;