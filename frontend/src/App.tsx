import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BoardPage from './pages/BoardPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/board/:boardId" element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
