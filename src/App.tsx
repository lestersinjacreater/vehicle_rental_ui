import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';


import Landing from './pages/landing';
import Login from './pages/login';



const App: React.FC = () => {
    const router = createBrowserRouter([

        {
            path: '/',
            element: <Landing />,
            errorElement: <Error />,
          },

          {
            path: '/login',
            element: <Login />,
            errorElement: <Error />,
          },















    ]);

    return (
      <RouterProvider router={router} />
    );
  };
  
  export default App;
