import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';


import Landing from './pages/landing';



const App: React.FC = () => {
    const router = createBrowserRouter([

        {
            path: '/',
            element: <Landing />,
            errorElement: <Error />,
          },






































    ]);

    return (
      <RouterProvider router={router} />
    );
  };
  
  export default App;
