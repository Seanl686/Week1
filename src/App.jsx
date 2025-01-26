import { Greeting } from './components/greetings'
import Button from './components/buttons'

function App() {
  return (
    <>
      <Greeting name='Brett' />
      <Greeting name="Jane" />
      <Greeting name="Steve" />
      <Button name='Brett' />
      <Button name="Jane" />
      <Button name="Steve" />
    </>
  )
}

export default App