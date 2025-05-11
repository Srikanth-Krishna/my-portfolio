import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import SkillsPage from './pages/Skills';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/skills', element: <SkillsPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/projects', element: <Projects /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
