import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <div>
      <h1 className="text-5xl font-heading font-medium text-[#FAF8EF] text-center p-7 bg-[#224362]">
        An Interactive Family Tree App
      </h1>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
