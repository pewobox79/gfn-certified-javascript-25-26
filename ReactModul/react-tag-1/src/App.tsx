import Form from './components/Form/Form'
import MainLayout from './layouts/MainLayout'
import UserProviderLayout from './layouts/UserProviderLayout'
import Homepage from './pages/Homepage'
import './styles/App.css'

function App() {
  //diese APP STEHT FÜR UNSEREN ROUTER
  return <UserProviderLayout>
    <MainLayout>
      <Form />
      <Homepage />
    </MainLayout>
  </UserProviderLayout>
}

export default App
