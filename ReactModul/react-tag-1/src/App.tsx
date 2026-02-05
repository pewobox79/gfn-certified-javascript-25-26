import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import './styles/App.css'

function App() {
  //diese APP STEHT FÜR UNSEREN ROUTER

  return <MainLayout>
    <Homepage/>
  </MainLayout>
}

export default App
