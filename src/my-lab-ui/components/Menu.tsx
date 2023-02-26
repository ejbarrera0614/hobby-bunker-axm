import { DiceSixFaces, DiceSixFacesTwo } from '@ui/components/Icons';
import { NavLink } from "react-router-dom";

interface Link {
    path: string;
    label: string;
}

const LiDiceLink = ({ path, label }: Link) => (
    <li className='hover:text-hover w-full bg-sky-500 text-ellipsis h-7'>
        <NavLink to={path} className={({ isActive }) =>
            `grid grid-cols-link  nav-link ${isActive ? 'active' : ''}`
        }>
            <span className='col-start-1 hidden'><DiceSixFaces /></span>
            <h5 className='col-start-2 m-auto'>{label}</h5>
            <span className='col-start-3 hidden'><DiceSixFacesTwo /></span>
        </NavLink >
    </li>
)

function Menu() {
    return (
        <nav className='mt-6'>
            <ul className='flex flex-col items-center gap-6 max-w-fit m-auto menu'>
                <LiDiceLink path='/' label='Inicio' />
                <LiDiceLink path='/Home' label='Misiones' />
                <LiDiceLink path='/Eventos' label='Eventos' />
                <LiDiceLink path='/Login' label='¿Qué somos?' />
            </ul>
        </nav>
    )
}

export default Menu