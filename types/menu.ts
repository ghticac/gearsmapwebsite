export interface MenuItem {
  title: string
  path: string
  description?: string
}

export interface MenuGroup {
  title: string
  items: MenuItem[]
}
