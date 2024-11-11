import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <h1>One day, a family tree will be here</h1>
      </div>
      <Outlet />
    </>
  )
}

export default App
