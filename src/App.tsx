import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './routes/HomePage/HomePage';
import { LibraryView } from './routes/LibraryPage/LibraryPage';
import { SearchPage } from './routes/SearchPage/SearchPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      // loader
      // errorElement
    },
    {
      path: '/library',
      element: <LibraryView />,
      // loader
      // errorElement
    },
    {
      path: '/search',
      element: <SearchPage />,
      // loader
      // errorElement
    },
    {
      path: '*',
      element: <HomePage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App;
