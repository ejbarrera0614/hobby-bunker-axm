export interface Link {
    path: string
    label: string
    showDices?: boolean
}

export interface LinksWithSubMenu {
    path: string
    label: string
    subMenu?: Link[]
  }
  