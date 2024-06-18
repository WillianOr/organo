// import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeHolderModificada = `${props.placeholder}...`

    // let valor = 'Willian'
    // const [valor, setValor] = useState('Willian')

    // const aoDigitado = (evento) => {    
    //     setValor(evento.target.value)
    //     console.log(valor)
    // }

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeHolderModificada} />
        </div>
    )
}

export default CampoTexto