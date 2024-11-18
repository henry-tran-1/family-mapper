import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="flex justify-around p-2 text-2xl font-medium font-heading text-[#111010] text-center bg-[#00ADB5]">
      <Link to="/">See Tree</Link>
      <Link to="/buildtree">Build Tree</Link>
      <p>Login</p>
    </div>
  )
}
