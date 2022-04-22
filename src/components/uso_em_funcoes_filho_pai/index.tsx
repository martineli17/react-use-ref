import { useRef } from "react"
import InputElement, { InputElementRef } from './inputComponent';

export function UsoFilhoParaPai(){
    const inputNameRef = useRef<InputElementRef>(null);
    const viewValueHandle = () => {
        alert(inputNameRef.current?.currentValue);
    }

    return(
        <>
            <InputElement ref={inputNameRef} label={"Nome"} defaultValue={""} />
            <br/>
            <button onClick={viewValueHandle}>Visualizar valor</button>
            <button onClick={() => inputNameRef.current?.resetInput()}>Resetar valor</button>
        </>
    )
}