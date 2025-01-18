import React, { JSX } from "react";

export interface DataSet {
    colour: string;
    value: number;
}

export interface PieChartProps {
    data: DataSet[];
    x: number;
    y: number;
    radius: number;
}

const PieChart = (props: PieChartProps) => {
    const {data, x, y, radius} = props;

    const circumference = Math.PI * 2 * radius;
    const sum = data.reduce((a, b) => a + b.value, 0);
    let rotation = -90;
    let segments: JSX.Element[] = [];
    data.map((dataEntry) => {
        const proportion = (dataEntry.value/sum);
        const dashAmount = circumference * proportion / 2;
        
        segments.push(<circle className="SimplePieChart-segment"
            cx={x} cy={y} r={radius/2} strokeWidth={radius} fill="transparent"
            stroke={dataEntry.colour}
            strokeDasharray={`${dashAmount} ${circumference}`}
            style={{transform: `rotate(${rotation}deg)`, transformOrigin: `${x}px ${y}px`}} />);
        
        rotation += proportion * 360;
    })

    return(
        <g className="SimplePieChart">
            {segments.map((segment) => segment)}
        </g>
    )
}

export default PieChart;