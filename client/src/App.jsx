import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ROUTES } from './routes';

function App() {
  const routes = createBrowserRouter(ROUTES);
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
