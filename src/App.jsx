import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/landing-page';
import PeriodCalculator from './pages/periodCalculator';
import PeriodResources from './pages/pages/periodResources';
import SignIn from './pages/pages/signin';
import SignUp from './pages/pages/signup';
import RootLayout from './layouts/rootLayout';
import About from './pages/pages/about';
import Resources from './pages/pages/periodResources/resources';
import { ToastContainer } from "react-toastify";
import Dashboard from './pages/pages/dashboard';
import Calendar from './pages/pages/calendar';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/period-calculator',
          element: <PeriodCalculator />,
        },
        {
          path: '/period-resources',
          element: <PeriodResources />,
        },
        {
          path: '/resources',
          element: <Resources />,
        },
        {
          path: '/sign-in',
          element: <SignIn />,
        },
        {
          path: '/sign-up',
          element: <SignUp />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/calendar',
          element: <Calendar />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
