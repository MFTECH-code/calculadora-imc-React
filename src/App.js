import React, {useState} from "react"

export default function App() {
  // States
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [imc, setImc] = useState(0)

  // HandleChanges
  const handleChangeAltura = (component) => {
    setAltura(component.target.value)
  }

  const handleChangePeso = (component) => {
    setPeso(component.target.value)
  }

  // Calculo do imc
  const imcCalc = () => {
    const calculo = peso / (altura * altura)
    setImc(calculo)
  }

  // Classificação do IMC
  const imcClassificacao = () => {
    if (imc < 18.5) {
      return <p>Você está abaixo do peso.</p>
    } else if (imc >= 18.5 && imc < 24.9) {
      return <p>Você está no peso adequado.</p>
    } else if (imc >= 25 && imc < 29.9) {
      return <p>Você está no sobrepeso.</p>
    } else if (imc >= 30 && imc < 34.9) {
      return <p>Você está na Obesidade Grau I</p>
    } else if (imc >= 35 && imc < 39.9) {
      return <p>Você está na Obesidade Grau II</p>
    } else {
      return <p>Você está na Obesidade Grau III</p>
    }
  }

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <section>
          <label>Altura: </label>
          <input type="text" name="faltura" value={altura} onChange={(e) => handleChangeAltura(e)}/>
          <label>Peso: </label>
          <input type="text" name="fpeso" value={peso} onChange={(e) => handleChangePeso(e)}/>
          <button onClick={() => imcCalc()}>Calcular</button>
      </section>
      <section>
        <h2>Resultado: {imc.toFixed(2)}</h2>
        {imcClassificacao()}
      </section>
    </>
  )
}

