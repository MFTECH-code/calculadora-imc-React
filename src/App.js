import React, {useState} from "react"
import Header from "./components/header/Header"
import Calculadora from "./components/calculadora/Calculadora"
import Resultado from "./components/resultado/Resultado"
import "./App.css"

export default function App() {
  // States
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [imc, setImc] = useState(0)

  // HandleChanges
  const handleChangeAltura = (component) => {
    setAltura(component.target.value.replace(",", "."))
  }

  const handleChangePeso = (component) => {
    setPeso(component.target.value)
  }

  // Calculo do imc
  const imcCalc = () => {
    if (altura > 100) {
      const calculo = peso / ((altura/100) * (altura/100))
      setImc(calculo)
    } else {
      const calculo = peso / (altura * altura)
      setImc(calculo)
    }
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
    <section className="app">
      <Header/>
      <Calculadora altura={altura} peso={peso} handleChangeAltura={handleChangeAltura} handleChangePeso={handleChangePeso} imcCalc={imcCalc}/>
      <Resultado imc={imc} imcClassificacao={imcClassificacao}/>
    </section>
  )
}

