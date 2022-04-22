import React, { forwardRef, useState, useImperativeHandle, useCallback } from 'react';

export interface InputElementProps {
    label: string;
    defaultValue: any;
}

export interface InputElementRef {
    resetInput: () => void;
    currentValue: any;
}

const InputElement: React.ForwardRefRenderFunction<InputElementRef, InputElementProps> = (props, ref) => {
        const [value, setValue] = useState(props.defaultValue);

        const resetInputHandle = useCallback(() => {
            setValue(props.defaultValue);
        }, []);

        useImperativeHandle(ref, () => ({
            resetInput: resetInputHandle,
            currentValue: value,
        }), [value]);

        return (
            <>
                <label htmlFor="name">{props.label}</label>
                <input id="name" type="text" value={value} onChange={event => setValue(event.target.value)} />
            </>
        )
    }

export default forwardRef(InputElement);