import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <div>
      <h1 className="text-4xl font-heading font-medium text-center p-5 bg-[#00ADB5]">
        An Interactive Family Tree App
      </h1>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
