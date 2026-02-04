import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Heading from './components/globals/Heading'
import Button from './components/globals/Button/Button'

function App() {
  const sayhello = (name: string) => {
    console.log("say hello", name)
  }
  sayhello("Peter")

  const headline = 'Vite + React'
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Heading title={headline} />
      <Heading title="das ist mein String" />
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Button 
          variant='alert' 
          style={{backgroundColor: "purple"}}
          />
          
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
