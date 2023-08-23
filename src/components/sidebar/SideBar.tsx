import { ReactNode } from 'react'
import style from './sidebar.module.css'

export const Sidebar = ({
  children
}: {
    children: ReactNode
  }) => {
  return (
    <div className={style.sidebar}>
      {children}
    </div>
  )
}
