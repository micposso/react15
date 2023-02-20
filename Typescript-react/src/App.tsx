import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './components/Heading'
import { Section } from './components/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <>
      <Heading title="This is my first typescript enable component" />
      <Section>
      {/* children are not props  */}
      This content goes inside the children and it gets passed as a react node, is not a prop
      </Section>
      </>
    </div>
  )
}

export default App
