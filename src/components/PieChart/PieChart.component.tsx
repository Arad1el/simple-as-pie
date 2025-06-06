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

                onAuxClick={(event) => dataEntry.events?.onAuxClick ? dataEntry.events?.onAuxClick(event, dataEntry) : null}
                onBlur={(event) => dataEntry.events?.onBlur ? dataEntry.events?.onBlur(event, dataEntry) : null}
                onClick={(event) => dataEntry.events?.onClick ? dataEntry.events?.onClick(event, dataEntry) : null}
                onDoubleClick={(event) => dataEntry.events?.onDoubleClick ? dataEntry.events?.onDoubleClick(event, dataEntry) : null}
                onFocus={(event) => dataEntry.events?.onFocus ? dataEntry.events?.onFocus(event, dataEntry) : null}
                onKeyDown={(event) => dataEntry.events?.onKeyDown ? dataEntry.events?.onKeyDown(event, dataEntry) : null}
                onKeyPress={(event) => dataEntry.events?.onKeyPress ? dataEntry.events?.onKeyPress(event, dataEntry) : null}
                onKeyUp={(event) => dataEntry.events?.onKeyUp ? dataEntry.events?.onKeyUp(event, dataEntry) : null}
                onMouseDown={(event) => dataEntry.events?.onMouseDown ? dataEntry.events?.onMouseDown(event, dataEntry) : null}
                onMouseEnter={(event) => dataEntry.events?.onMouseEnter ? dataEntry.events?.onMouseEnter(event, dataEntry) : null}
                onMouseLeave={(event) => dataEntry.events?.onMouseLeave ? dataEntry.events?.onMouseLeave(event, dataEntry) : null}
                onMouseMove={(event) => dataEntry.events?.onMouseMove ? dataEntry.events?.onMouseMove(event, dataEntry) : null}
                onMouseOut={(event) => dataEntry.events?.onMouseOut ? dataEntry.events?.onMouseOut(event, dataEntry) : null}
                onMouseUp={(event) => dataEntry.events?.onMouseUp ? dataEntry.events?.onMouseUp(event, dataEntry) : null}
                onPointerCancel={(event) => dataEntry.events?.onPointerCancel ? dataEntry.events?.onPointerCancel(event, dataEntry) : null}
                onPointerDown={(event) => dataEntry.events?.onPointerDown ? dataEntry.events?.onPointerDown(event, dataEntry) : null}
                onPointerEnter={(event) => dataEntry.events?.onPointerEnter ? dataEntry.events?.onPointerEnter(event, dataEntry) : null}
                onPointerLeave={(event) => dataEntry.events?.onPointerLeave ? dataEntry.events?.onPointerLeave(event, dataEntry) : null}
                onPointerMove={(event) => dataEntry.events?.onPointerMove ? dataEntry.events?.onPointerMove(event, dataEntry) : null}
                onPointerOut={(event) => dataEntry.events?.onPointerOut ? dataEntry.events?.onPointerOut(event, dataEntry) : null}
                onPointerUp={(event) => dataEntry.events?.onPointerUp ? dataEntry.events?.onPointerUp(event, dataEntry) : null}
                onTouchCancel={(event) => dataEntry.events?.onTouchCancel ? dataEntry.events?.onTouchCancel(event, dataEntry) : null}
                onTouchEnd={(event) => dataEntry.events?.onTouchEnd ? dataEntry.events?.onTouchEnd(event, dataEntry) : null}
                onTouchMove={(event) => dataEntry.events?.onTouchMove ? dataEntry.events?.onTouchMove(event, dataEntry) : null}
                onTouchStart={(event) => dataEntry.events?.onTouchStart ? dataEntry.events?.onTouchStart(event, dataEntry) : null}
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

                        onAuxClick={(event) => dataEntry.events?.onAuxClick ? dataEntry.events?.onAuxClick(event, dataEntry) : null}
                        onBlur={(event) => dataEntry.events?.onBlur ? dataEntry.events?.onBlur(event, dataEntry) : null}
                        onClick={(event) => dataEntry.events?.onClick ? dataEntry.events?.onClick(event, dataEntry) : null}
                        onDoubleClick={(event) => dataEntry.events?.onDoubleClick ? dataEntry.events?.onDoubleClick(event, dataEntry) : null}
                        onFocus={(event) => dataEntry.events?.onFocus ? dataEntry.events?.onFocus(event, dataEntry) : null}
                        onKeyDown={(event) => dataEntry.events?.onKeyDown ? dataEntry.events?.onKeyDown(event, dataEntry) : null}
                        onKeyPress={(event) => dataEntry.events?.onKeyPress ? dataEntry.events?.onKeyPress(event, dataEntry) : null}
                        onKeyUp={(event) => dataEntry.events?.onKeyUp ? dataEntry.events?.onKeyUp(event, dataEntry) : null}
                        onMouseDown={(event) => dataEntry.events?.onMouseDown ? dataEntry.events?.onMouseDown(event, dataEntry) : null}
                        onMouseEnter={(event) => dataEntry.events?.onMouseEnter ? dataEntry.events?.onMouseEnter(event, dataEntry) : null}
                        onMouseLeave={(event) => dataEntry.events?.onMouseLeave ? dataEntry.events?.onMouseLeave(event, dataEntry) : null}
                        onMouseMove={(event) => dataEntry.events?.onMouseMove ? dataEntry.events?.onMouseMove(event, dataEntry) : null}
                        onMouseOut={(event) => dataEntry.events?.onMouseOut ? dataEntry.events?.onMouseOut(event, dataEntry) : null}
                        onMouseUp={(event) => dataEntry.events?.onMouseUp ? dataEntry.events?.onMouseUp(event, dataEntry) : null}
                        onPointerCancel={(event) => dataEntry.events?.onPointerCancel ? dataEntry.events?.onPointerCancel(event, dataEntry) : null}
                        onPointerDown={(event) => dataEntry.events?.onPointerDown ? dataEntry.events?.onPointerDown(event, dataEntry) : null}
                        onPointerEnter={(event) => dataEntry.events?.onPointerEnter ? dataEntry.events?.onPointerEnter(event, dataEntry) : null}
                        onPointerLeave={(event) => dataEntry.events?.onPointerLeave ? dataEntry.events?.onPointerLeave(event, dataEntry) : null}
                        onPointerMove={(event) => dataEntry.events?.onPointerMove ? dataEntry.events?.onPointerMove(event, dataEntry) : null}
                        onPointerOut={(event) => dataEntry.events?.onPointerOut ? dataEntry.events?.onPointerOut(event, dataEntry) : null}
                        onPointerUp={(event) => dataEntry.events?.onPointerUp ? dataEntry.events?.onPointerUp(event, dataEntry) : null}
                        onTouchCancel={(event) => dataEntry.events?.onTouchCancel ? dataEntry.events?.onTouchCancel(event, dataEntry) : null}
                        onTouchEnd={(event) => dataEntry.events?.onTouchEnd ? dataEntry.events?.onTouchEnd(event, dataEntry) : null}
                        onTouchMove={(event) => dataEntry.events?.onTouchMove ? dataEntry.events?.onTouchMove(event, dataEntry) : null}
                        onTouchStart={(event) => dataEntry.events?.onTouchStart ? dataEntry.events?.onTouchStart(event, dataEntry) : null}
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