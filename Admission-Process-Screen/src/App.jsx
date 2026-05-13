
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdmissionPage from './pages/AdmissionPage'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AdmissionPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
