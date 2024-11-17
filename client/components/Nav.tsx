import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="flex justify-around p-3 text-2xl font-heading text-white text-center bg-[#393E46]">
      <Link to="/">See Tree</Link>
      <Link to="/buildtree">Build Tree</Link>
      <p>Login</p>
    </div>
  )
}
