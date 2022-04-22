import React, { forwardRef } from 'react';

export interface InputElementProps {
    label: string;
}

const InputElement: React.ForwardRefRenderFunction<HTMLInputElement, InputElementProps> = 
                    (props: InputElementProps, ref: React.LegacyRef<HTMLInputElement>) => {
    return(
        <>
            <label htmlFor="name">{props.label}</label>
            <input id="name" type="text" ref={ref}/>
        </>
    )
}

export default forwardRef(InputElement);