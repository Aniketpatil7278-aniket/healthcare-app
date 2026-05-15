
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdmissionPage from './pages/AdmissionPage/AdmissionPage'
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdmissionPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
