/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import SeeTree from './components/SeeTree'
import BuildTree from './components/BuildTree'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<SeeTree />} />
      <Route path="buildtree" element={<BuildTree />} />
    </Route>,
  ),
)

export default router
