import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage/HomePage'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage'
import OrdersPage from './Pages/OrdersPage/OrdersPage'
import './App.css'

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
  )
}

export default App
