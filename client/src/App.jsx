import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage/HomePage'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage'
import './App.css'

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
  )
}

export default App
