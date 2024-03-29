import logo from '@/assets/img/logo.jpg'

export function Header (): JSX.Element {
  return (
        <header className='flex flex-col place-content-center'>
            <img src={logo} alt="Page logo" className='max-w-xs w-full h-auto rounded-full' />
            <p className='text-center'>Hobby Bunker AXM</p>
        </header>

  )
}

