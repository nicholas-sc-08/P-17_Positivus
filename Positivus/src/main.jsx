import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.jsx';
import { GlobalContextProvider } from './context/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
  <RouterProvider router={router} />
</GlobalContextProvider>
)