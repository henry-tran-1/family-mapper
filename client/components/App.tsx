import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className="text-4xl">One day, a family tree will be here</h1>

      <Outlet />
    </div>
  )
}

export default App
