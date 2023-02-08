import { useState } from 'react'
import { Calculo } from './components/Calculo'
import './global.css'

function App() {
  // FATORAÇÃO
  function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

// VARIAVEIS
  const [A, setA] = useState(0)
  const [B, setB] = useState(0)

// OPERAÇÕES
  const [Soma, setSoma] = useState(0)
  const [SubAB,setSubAB] = useState(0)
  const [SubBA,setSubBA] = useState(0)
  const [Mult,setMult] = useState(0)
  const [DivAB,setDivAB] = useState(0)
  const [DivBA,setDivBA] = useState(0)
  const [PotAB,setPotAB] = useState(0)
  const [PotBA,setPotBA] = useState(0)
  const [RaizA,setRaizA] = useState(0)
  const [RaizB,setRaizB] = useState(0)
  const [FatA,setFatA] = useState(0)
  const [FatB,setFatB] = useState(0)
  const [PorcAB,setPocAB] = useState(0)
  const [PorcBA,setPocBA] = useState(0)
  const [Media, setMedia] = useState(0)
  

  const Calcular = () => {
    event.preventDefault()
    setSoma(A + B)
    setSubAB(A - B)
    setSubBA(B - A)
    setMult(A * B)
    setDivAB((A / B).toFixed(2))
    setDivBA((B / A).toFixed(2))
    setPotAB(Math.pow(B,A).toFixed(2))
    setPotBA(Math.pow(A,B).toFixed(2))
    setRaizA(Math.sqrt(A).toFixed(2))
    setRaizB(Math.sqrt(B).toFixed(2))
    setFatA(factorialize(A))
    setFatB(factorialize(B))
    setPocAB(Math.round((A/B)*100))
    setPocBA(Math.round((B/A)*100))
    setMedia((A+B)/2)
  }

  const newAChange = (e) => {
    setA(parseFloat(e.target.value))
  }

  const newBChange = (e) => {
    setB(parseFloat(e.target.value))
  }

  return (
    <div className='bg-gray-700 min-w-screen min-h-screen flex justify-center items-center'>
      <div className='w-[50vw] h-auto border border-gray-100 rounded-lg p-4'>
        <header className='flex justify-center items-center pt-2 gap-4 flex-col'>
          <h1 className='text-green-500 font-bold text-4xl mb-4'>Super Calculadora</h1>
          <form onSubmit={Calcular} className='w-full flex justify-around'>
            <div className='w-full flex gap-8 flex-col mb-8'>
              <div className='w-full flex justify-around items-center'>
                <div className='flex gap-2 items-center'>
                  <label className='text-white'>Valor A: </label>
                  <input
                   type="number" 
                   placeholder='' 
                   className='focus:border-green-500 focus:outline-none border rounded-md bg-gray-700 text-white w-24 pl-1 text-center'
                   onChange={newAChange}
                   />
                </div>
                <div className='flex gap-2 item s-center'>
                  <label className='text-white'>Valor B: </label>
                  <input
                   type="number"
                   placeholder='' 
                   className='focus:border-green-500 focus:outline-none border rounded-md bg-gray-700 text-white w-24 pl-1 text-center'
                   onChange={newBChange}
                  />
                </div>
              </div>
              <div className='w-full flex justify-center items-center'>
                <button className='py-2 px-8 bg-blue-600 rounded-md text-white hover:bg-blue-400 transition-all delay-50'>Calcular</button>
              </div>
            </div>
          </form>
        </header>

        <main>
          <div className='grid grid-cols-3 grid-rows-5 gap-2 w-full'>
            <Calculo operacao={"Soma"} resultado={Soma}/>
            <Calculo operacao={"Subtração A - B"} resultado={SubAB}/>
            <Calculo operacao={"Subtração B - A"} resultado={SubBA}/>
            <Calculo operacao={"Multiplicação"} resultado={Mult}/>
            <Calculo operacao={"Divisão A/B"} resultado={DivAB}/>
            <Calculo operacao={"Divisão B/A"} resultado={DivBA}/>
            <Calculo operacao={"Potencia A na Base B"} resultado={PotAB}/>
            <Calculo operacao={"Potencia B na Base A"} resultado={PotBA}/>
            <Calculo operacao={"Raiz Quadrada de A"} resultado={RaizA}/>
            <Calculo operacao={"Raiz Quadrada de B"} resultado={RaizB}/>
            <Calculo operacao={"Fatorial de A"} resultado={FatA}/>
            <Calculo operacao={"Fatorial de B"} resultado={FatB}/>
            <Calculo operacao={"Porcentagem de A em B"} resultado={`${PorcAB}%`}/>
            <Calculo operacao={"Porcentagem de B em A"} resultado={`${PorcBA}%`}/>
            <Calculo operacao={"Média"} resultado={Media}/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
