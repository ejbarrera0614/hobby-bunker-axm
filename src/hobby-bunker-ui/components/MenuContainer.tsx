import {  useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/menu'
import { t } from '@/utils/translate'
import { LinkWithDicesIcons } from './LinkWithDicesIcons'
import { Link, LinksWithSubMenu } from '@/interface/Links'

const LinksContainer = ({ path, label, subMenu }: LinksWithSubMenu): JSX.Element => {
  const { pathname } = useLocation()
  const isLinsContainerActive: boolean = ((subMenu?.some(options => options.path === pathname)) ?? false) || pathname === path
  const linkClassName = `h-fit w-full text-ellipsis rounded ${isLinsContainerActive ? 'active bg-primary' : 'hover:bg-primary'}`
  const subMenuClassName = 'border-t-2 m-auto flex flex-col items-center rounded-b'

  return (
    <li className={`${linkClassName}`}>
        <LinkWithDicesIcons path={path} label={label} showDices={pathname === path} />
        {(subMenu != null && isLinsContainerActive)
          ? <ul className={`${subMenuClassName}`}>
                {Object.values(subMenu).map(item =>
                    <li key={`sub-menu-${path}-${item.path}`} className='w-full'>
                        <LinkWithDicesIcons path={item.path} label={t(item.label)} showDices={pathname === item.path} />
                    </li>)}
            </ul>
          : <></>}
    </li>
  )
}

export function MenuContainer (): JSX.Element {
  const subMenu: Link[] = [{
    path: '/quest/add',
    label: 'addQuest'
  }, {
    path: '/quest/add2',
    label: 'Sub Menu2'
  }]

  return (
    <nav className='mt-6'>
        <ul className='m-auto flex max-w-fit min-w-menu-container flex-col items-center gap-6'>
            <LinksContainer path={ROUTES.home.path} label={t(ROUTES.home.label)} />
            <LinksContainer path={ROUTES.quest.path} label={t(ROUTES.quest.label)} subMenu={subMenu}/>
            <LinksContainer path={ROUTES.events.path} label={t(ROUTES.events.label)} />
            <LinksContainer path={ROUTES.about.path} label={t(ROUTES.about.label)} />
        </ul>
    </nav>
  )
}
