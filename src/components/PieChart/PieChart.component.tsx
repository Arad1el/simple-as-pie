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

    data.map((dataEntry, index) => {
        if (dataEntry.value === sum) {
            segments.push(<circle className="SimplePieChart-segment" key={index}
                cx="0" cy="0" r={radius} fill={dataEntry.colour}
                {...dataEntry.events} />);
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
                        onAuxClick={dataEntry.events?.onAuxClick}
                        onBlur={dataEntry.events?.onBlur}
                        onClick={dataEntry.events?.onClick}
                        onDoubleClick={dataEntry.events?.onDoubleClick}
                        onFocus={dataEntry.events?.onFocus}
                        onKeyDown={dataEntry.events?.onKeyDown}
                        onKeyPress={dataEntry.events?.onKeyPress}
                        onKeyUp={dataEntry.events?.onKeyUp}
                        onMouseDown={dataEntry.events?.onMouseDown}
                        onMouseEnter={dataEntry.events?.onMouseEnter}
                        onMouseLeave={dataEntry.events?.onMouseLeave}
                        onMouseMove={dataEntry.events?.onMouseMove}
                        onMouseOut={dataEntry.events?.onMouseOut}
                        onMouseUp={dataEntry.events?.onMouseUp}
                        onPointerCancel={dataEntry.events?.onPointerCancel}
                        onPointerDown={dataEntry.events?.onPointerDown}
                        onPointerEnter={dataEntry.events?.onPointerEnter}
                        onPointerLeave={dataEntry.events?.onPointerLeave}
                        onPointerMove={dataEntry.events?.onPointerMove}
                        onPointerOut={dataEntry.events?.onPointerOut}
                        onPointerUp={dataEntry.events?.onPointerUp}
                        onTouchCancel={dataEntry.events?.onTouchCancel}
                        onTouchEnd={dataEntry.events?.onTouchEnd}
                        onTouchMove={dataEntry.events?.onTouchMove}
                        onTouchStart={dataEntry.events?.onTouchStart}
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