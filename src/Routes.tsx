import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'layouts/Layout.tsx';
import Home from 'pages/Home.tsx';
import Login from 'pages/Login.tsx';
import Signup from 'pages/Signup.tsx';
import NotFound from 'pages/NotFound.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
        {
          path: '*',
          element: <NotFound />,
          // 에러 시 메인 보여주기
          // element: <Navigate to="/" replace={true} />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export const Routes = () => {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
};
