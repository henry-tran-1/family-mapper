import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className="text-4xl font-heading font-medium text-center p-3 mb-4 bg-purple-400">
        An Interactive Family Tree App
      </h1>
      <Outlet />
    </div>
  )
}

export default App
