import { Outlet, createBrowserRouter } from 'react-router-dom'
import AppHeader from '../app-header'
import NavigationBar from '../navigation-bar'
import Home from '../pages/home'
import Rules from '../pages/rules'
import Statistics from '../pages/statistics'
import CoachCard from '../pages/coach-card'

const router = createBrowserRouter([
  {
    path: '/',
    element: [<AppHeader />, <NavigationBar />, <Outlet />],
    children: [
      {
        index: true,
        element: [<Home />],
      },
      {
        path: '/statistics',
        Component: Statistics,
      },
      {
        path: '/rules',
        Component: Rules,
      },
      {
        path: '/coach/:id',
        Component: CoachCard,
      },
    ],
  },
])

export default router
