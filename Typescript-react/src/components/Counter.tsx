import { ReactNode } from "react"

type CounterProps = {
  setCount:  React.Dispatch<React.SetStateAction<number>>
  children: ReactNode
}
const Counter = ({ setCount, children }: CounterProps) => {
  // enforce a number with typescript, the | is called an union. useState now can only have a number or null

  return (
    <div>
      <h1>{children}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  )
}

export default Counter;