import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from '@ui/components/Header'
import { MenuContainer } from '@ui/components/MenuContainer'
export function RootLayout (): JSX.Element {
  useEffect(() => {
    document.title = 'Home Page'
  }, [])

  return (
        <>
            <main className='flex h-full ' >
                <section className='w-3/12 border-r-2 pr-9 border-stone-200 border-collapse'>
                    <Header />
                    <MenuContainer />
                </section>
                <section className='w-9/12 px-9'>
                  <div className='p-4 border-b-2 mb-4'>
                    bienvenido usuario
                    <button className='bg-transparent border-2 rounded p-2  hover:border-hover hover:text-hover ml-4'>iniciar sesion</button>
                  </div>
                    <Outlet />
                </section>
                <footer></footer>
            </main>
        </>
  )
}
