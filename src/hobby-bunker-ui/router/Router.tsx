import { Suspense } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import {RootLayout} from '@ui/layouts/RootLayout'
import {HomePage} from '@ui/pages/HomePage'
import {QuestPage} from '@/hobby-bunker-ui/pages/Quest/QuestPage'
import { QuestAddPage } from '@ui/pages/Quest/QuestAddPage'
import { ROUTES } from '@/constants/menu'
import {ErrorPage} from '@ui/pages/ErrorPage';
function Router (): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: ROUTES.quest.path, element: <QuestPage /> },
        { path: ROUTES.quest.subMenu?.questAdd.path, element: <QuestAddPage /> },
      ],
      errorElement:<ErrorPage />
    }
  ])
  return (
        <Suspense fallback={<h6>Loading...</h6>}>
            <RouterProvider router={router} />
        </Suspense>
  )
}

export default Router
