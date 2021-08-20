import React from 'react'

export default function Resultado(props) {
    return (
        <section>
        <h2>Resultado: {props.imc.toFixed(2)}</h2>
        {props.imcClassificacao()}
      </section>
    )
}
