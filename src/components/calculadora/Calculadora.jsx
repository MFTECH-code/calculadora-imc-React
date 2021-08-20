import React from 'react'

export default function Calculadora(props) {
    return (
        <section>
          <label>Altura: </label>
          <input type="text" name="faltura" value={props.altura} onChange={(e) => props.handleChangeAltura(e)}/>
          <label>Peso: </label>
          <input type="text" name="fpeso" value={props.peso} onChange={(e) => props.handleChangePeso(e)}/>
          <button onClick={() => props.imcCalc()}>Calcular</button>
      </section>
    )
}
