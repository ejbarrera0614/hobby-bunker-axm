interface Menu {
  path: string
  label: string
}

interface MenuWithSubMenu extends Menu {
  subMenu?: Record<string, Menu>
}

export const ROUTES: Record<string, MenuWithSubMenu> = {
  home: { path: '/', label: 'home' },
  quest: { path: '/quest', label: 'quest', subMenu: { questAdd: { path: '/quest/add', label: 'AddQuest' } } },
  events: { path: '/events', label: 'events' },
  about: { path: '/about', label: 'aboutUs' }
}
