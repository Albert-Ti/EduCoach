import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppHeader from './app-header'
import NavigationBar from './navigation-bar'
import Home from './pages/home'
import Rules from './pages/rules'
import Statistics from './pages/statistics'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/statistics',
    element: <Statistics />,
  },
  {
    path: '/rules',
    element: <Rules />,
  },
])

function App() {
  return (
    <>
      <AppHeader />
      <NavigationBar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
