import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'


function App() {
  const [count, setCount] = useState<number | null>(1)

  return (
    <div className="App">
      <>
      <Heading title="This is my first typescript enable component" />
      <Section>
      {/* children are not props  */}
      This content goes inside the children and it gets passed as a react node, is not a prop 
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      </>
    </div>
  )
}

export default App
