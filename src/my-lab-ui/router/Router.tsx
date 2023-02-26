import { Suspense } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import RootLayout from '@ui/layouts/RootLayout';
import HomePage from '@ui/pages/HomePage';

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { index: true, element: <HomePage /> }
            ]
        },
        {
            path: "/home",
            element: <RootLayout />,
            children: [
                { index: true, element: <HomePage /> }
            ]
        }
    ]);
    return (
        <Suspense fallback={<h6>Loading...</h6>}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default Router