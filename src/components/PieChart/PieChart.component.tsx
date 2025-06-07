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
            cx="0" cy="0" r={radius} fill={backgroundColour} />);
    }

    const getCoordsForAngle = (degrees: number): Coordinates => {
        const radians = degrees  * Math.PI / 180;

        return {
            x: Math.cos(radians) * radius,
            y: Math.sin(radians) * radius
        };
    }

    const createEventProps = (dataEntry: DataSet) => {
        const props: Record<string, any> = {};
        const entries = Object.entries(dataEntry.events ?? {});

        entries.forEach((entry) => {
            if (Array.isArray(entry) && entry.length === 2) {
                const eventType = entry[0];
                const eventFunc = entry[1];
                if (typeof eventType === "string" && eventType !== "" && typeof eventFunc === "function") {
                    props[eventType] = (event: any) => eventFunc(event, dataEntry);
                }  
            }
        });

        return props;
    };

    data.map((dataEntry, index) => {
        if (dataEntry.value === sum) {
            segments.push(<circle className="SimplePieChart-segment" key={index}
                cx="0" cy="0" r={radius} fill={dataEntry.colour}

                {...createEventProps(dataEntry)}
                />);
        }
        else {
            const proportion = (dataEntry.value/sum);
            const endAngle = (proportion * 360);
            const endCoords = getCoordsForAngle(endAngle);
            const arcFlag = proportion < 0.5 ? 0 : 1;
            
            segments.push(<path className="SimplePieChart-segment" key={index}
                        d={`M ${radius} ${0} A ${radius} ${radius} 0 ${arcFlag} 1 ${endCoords.x} ${endCoords.y} L 0 0`}
                        fill={dataEntry.colour}
                        strokeWidth="1" stroke={dataEntry.colour}
                        style={{transform: `rotate(${rotation}deg)`, transformOrigin: `0 0`}}

                        {...createEventProps(dataEntry)}
                />);
            
            rotation += proportion * 360;
        }        
    })

    return(
        <g className="SimplePieChart" style={{translate: `${x}px ${y}px`}}>
            {segments.map((segment) => segment)}
        </g>
    )
}

export default PieChart;