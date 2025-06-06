export interface DataSet {
    colour: string;
    value: number;
    events?: {
        onAuxClick?(event: React.MouseEvent<SVGPathElement, MouseEvent>, data: DataSet): void;
        onBlur?(event: React.FocusEvent<SVGPathElement, Element>, data: DataSet): void;
        onClick?(event: React.MouseEvent<SVGPathElement, MouseEvent>, data: DataSet): void;
        onDoubleClick?(event: React.MouseEvent<SVGPathElement, MouseEvent>, data: DataSet): void;
        onFocus?(event: React.FocusEvent<SVGPathElement, Element>, data: DataSet): void;
        onKeyDown?(event: React.KeyboardEvent<SVGPathElement>, data: DataSet): void;
        onKeyPress?(event: React.KeyboardEvent<SVGPathElement>, data: DataSet): void;
        onKeyUp?(event: React.KeyboardEvent<SVGPathElement>, data: DataSet): void;
        onMouseDown?(event: React.MouseEvent<SVGPathElement, MouseEvent>, data: DataSet): void;
        onMouseEnter?(event: React.MouseEvent<SVGPathElement, MouseEvent>, data: DataSet): void;
        onMouseLeave?(event: React.MouseEvent<SVGPathElement, MouseEvent>, data: DataSet): void;
        onMouseMove?(event: React.MouseEvent<SVGPathElement, MouseEvent>, data: DataSet): void;
        onMouseOut?(event: React.MouseEvent<SVGPathElement, MouseEvent>, data: DataSet): void;
        onMouseUp?(event: React.MouseEvent<SVGPathElement, MouseEvent>, data: DataSet): void;
        onPointerCancel?(event: React.PointerEvent<SVGPathElement>, data: DataSet): void;
        onPointerDown?(event: React.PointerEvent<SVGPathElement>, data: DataSet): void;
        onPointerEnter?(event: React.PointerEvent<SVGPathElement>, data: DataSet): void;
        onPointerLeave?(event: React.PointerEvent<SVGPathElement>, data: DataSet): void;
        onPointerMove?(event: React.PointerEvent<SVGPathElement>, data: DataSet): void;
        onPointerOut?(event: React.PointerEvent<SVGPathElement>, data: DataSet): void;
        onPointerUp?(event: React.PointerEvent<SVGPathElement>, data: DataSet): void;
        onTouchCancel?(event: React.TouchEvent<SVGPathElement>, data: DataSet): void;
        onTouchEnd?(event: React.TouchEvent<SVGPathElement>, data: DataSet): void;
        onTouchMove?(event: React.TouchEvent<SVGPathElement>, data: DataSet): void;
        onTouchStart?(event: React.TouchEvent<SVGPathElement>, data: DataSet): void;
    }
}