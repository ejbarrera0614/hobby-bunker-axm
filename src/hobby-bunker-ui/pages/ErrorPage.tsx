import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/menu';

export function ErrorPage() {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
        ErrorPage
        <NavLink to={ROUTES.home.path} className='mt-6 p-4 bg-primary rounded hover:bg-hover'>Volver al inicio</NavLink>
    </div>
  )
}