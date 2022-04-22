import { useRef } from "react"
import InputElement from './inputComponent';

export function UsoEmConponente(){
    const inputNameRef = useRef<HTMLInputElement>(null);
    const viewValueHandle = () => {
        alert(inputNameRef.current?.value);
    }

    return(
        <>
            <InputElement ref={inputNameRef} label={"Nome"} />
            <br/>
            <button onClick={viewValueHandle}>Visualizar valor</button>
        </>
    )
}