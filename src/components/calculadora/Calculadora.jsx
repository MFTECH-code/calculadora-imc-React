import React from 'react'
import "./Calculadora.css"

export default function Calculadora(props) {
    return (
        <section className="formulario">
          <label>Altura: </label>
          <input type="text" name="faltura" value={props.altura} placeHolder="Ex. 1.76m" onChange={(e) => props.handleChangeAltura(e)}/>
          <label>Peso: </label>
          <input type="text" name="fpeso" value={props.peso} placeHolder="Ex. 85Kg" onChange={(e) => props.handleChangePeso(e)}/>
          <button onClick={() => props.imcCalc()}>Calcular</button>
      </section>
    )
}
