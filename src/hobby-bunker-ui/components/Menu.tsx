import { DiceSixFaces, DiceSixFacesTwo } from '@ui/components/Icons'
import { NavLink, useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/menu'
import { t } from '@/utils/translate'
interface Link {
  path: string
  label: string
  showDices?: boolean
}
interface LinksWithSubMenu {
  path: string
  label: string
  subMenu?: Link[]
}

const LinkWithDicesIcons = ({ path, label, showDices }: Link): JSX.Element => {
  const dicesStyle = (showDices ?? false) ? '' : 'invisible'

  return (
    <NavLink to={path} className='hover:text-hover grid grid-cols-link h-full nav-link py-2'>
        <span className={`col-start-1 m-auto ${dicesStyle}`}><DiceSixFaces /></span>
        <h5 className='col-start-2 m-auto'>{label}</h5>
        <span className={`col-start-3 m-auto ${dicesStyle}`}><DiceSixFacesTwo /></span>
    </NavLink >)
}

const LinksContainer = ({ path, label, subMenu }: LinksWithSubMenu): JSX.Element => {
  const { pathname } = useLocation()
  const isLinsContainerActive: boolean = ((subMenu?.some(options => options.path === pathname)) ?? false) || pathname === path
  const linkClassName = `h-fit w-full text-ellipsis rounded ${isLinsContainerActive ? 'active bg-primary' : 'hover:bg-primary'}`
  const subMenuClassName = 'm-auto flex flex-col items-center rounded-b'

  return (
    <li className={`${linkClassName}`}>
        <LinkWithDicesIcons path={path} label={label} showDices={pathname === path} />
            {(subMenu != null && isLinsContainerActive)
              ? <ul className={`border-t-2 ${subMenuClassName}`}>
                    {Object.values(subMenu).map(item =>
                        <li key={`sub-menu-${path}-${item.path}`} className='w-full'>
                            <LinkWithDicesIcons path={item.path} label={item.label} showDices={pathname === item.path} />
                        </li>)}
                </ul>
              : <></>}
    </li>
  )
}

export default function MenuContainer (): JSX.Element {
  const subMenu: Link[] = [{
    path: '/quest/add',
    label: 'Agregar Misión'
  }, {
    path: '/quest/add2',
    label: 'Sub Menu2'
  }]

  return (
    <nav className='mt-6'>
        <ul className='m-auto flex max-w-fit flex-col items-center gap-6'>
            <LinksContainer path={ROUTES.home.path} label={t(ROUTES.home.label)} />
            <LinksContainer path={ROUTES.quest.path} label={t(ROUTES.quest.label)} subMenu={subMenu}/>
            <LinksContainer path={ROUTES.events.path} label={t(ROUTES.events.label)} />
            <LinksContainer path={ROUTES.about.path} label={t(ROUTES.about.label)} />
        </ul>
    </nav>
  )
}
