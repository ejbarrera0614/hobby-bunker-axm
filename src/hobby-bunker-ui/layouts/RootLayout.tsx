import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '@ui/components/Menu'
import Header from '@ui/components/Header'
function RootLayout (): JSX.Element {
  useEffect(() => {
    document.title = 'Home Page'
  }, [])

  return (
        <>
            <main className='flex h-full ' >
                <section className='w-3/12 border-r-2 pr-9 border-stone-200 border-collapse'>
                    <Header />
                    <Menu />
                </section>
                <section className='w-9/12 px-9'>
                    <Outlet />
                </section>
                <footer></footer>
            </main>
        </>
  )
}

export default RootLayout
