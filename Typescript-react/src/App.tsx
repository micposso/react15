import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'
import List from "./components/List"


function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <div className="App">
      <>
      <Heading title="This is my first typescript enable component" />
      <Section>
      {/* children are not props  */}
      This content goes inside the children and it gets passed as a react node, is not a prop 
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["coffee", "bananas", "Apples", "Pineaples"]} render={(item: string) => <span>{item}</span>} />
      </>
    </div>
  )
}

export default App
