import { useRef } from "react"

export function UsoReferenciaHtml(){
    const inputNameRef = useRef<HTMLInputElement>(null);
    const viewValueHandle = () => {
        alert(inputNameRef.current?.value);
    }

    return(
        <>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" ref={inputNameRef}/>
            <br/>
           <button onClick={viewValueHandle}>Visualizar valor</button>
        </>
    )
}