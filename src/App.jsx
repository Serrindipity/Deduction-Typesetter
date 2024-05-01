import { useState } from 'react'
import './App.css'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex';
import Row from './Row';
import Select from 'react-select'

// TODO: Add checking for system types (i.e. Basic TFDS shouldn't use \land, \lor, etc.)

function App() {
  const [math, setMath] = useState("")

  var mathString = ""

  systemOptions = [
    { value: 'TFDS', label: 'Basic TFDS'},
    { value: 'TFDS+', label: 'Extended TFDS'},
    { value: 'TFDS++', label: 'Further Extended TFDS'},
    { value: 'poly', label: 'Polyadic' },
    { value: 'polyExtended', label: 'Polyadic Extended' },
  ]

  var [system, setSystem] = useState("poly")
  return (
    <>
      <Select options = {systemOptions} onChange = {setSystem} />
      <h1>Deduction Typesetter</h1>
      <Row />


      {/* <BlockMath math="\begin{align*}
                [1] & (1) & (\forall x)(p \lor Fx) && \text{P}\\
                [2] & (2) & -p && \text{P}\\
                [1] & (3) & p \lor Fx && (1)\text{UI}\\
                [1,2] & (4) & Fx && (2)(3)\text{TF}\\
                [1,2] & (5) & (\forall x)Fx && (4)\text{UG}\\
                [1] & (6) & -p \supset (\forall x)Fx && [2](4)\text{D}\\
                [1] & (7) & p \lor (\forall x)Fx && (6)\text{TF}
            \end{align*}"/> */}
    </>
  )
}

export default App
