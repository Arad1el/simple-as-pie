import { FocusEventHandler, KeyboardEventHandler, MouseEventHandler, PointerEventHandler, TouchEventHandler } from "react";

export interface DataSet {
    colour: string;
    value: number;
    events?: {
        onAuxClick?: MouseEventHandler;
        onBlur?: FocusEventHandler;
        onClick?: MouseEventHandler;
        onDoubleClick?: MouseEventHandler;
        onFocus?: FocusEventHandler;
        onKeyDown?: KeyboardEventHandler;
        onKeyPress?: KeyboardEventHandler;
        onKeyUp?: KeyboardEventHandler;
        onMouseDown?: MouseEventHandler;
        onMouseEnter?: MouseEventHandler;
        onMouseLeave?: MouseEventHandler;
        onMouseMove?: MouseEventHandler;
        onMouseOut?: MouseEventHandler;
        onMouseUp?: MouseEventHandler;
        onPointerCancel?: PointerEventHandler;
        onPointerDown?: PointerEventHandler;
        onPointerEnter?: PointerEventHandler;
        onPointerLeave?: PointerEventHandler;
        onPointerMove?: PointerEventHandler;
        onPointerOut?: PointerEventHandler;
        onPointerUp?: PointerEventHandler;
        onTouchCancel?: TouchEventHandler;
        onTouchEnd?: TouchEventHandler;
        onTouchMove?: TouchEventHandler;
        onTouchStart?: TouchEventHandler;
    }
}