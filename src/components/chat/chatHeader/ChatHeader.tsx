import { ReactNode } from 'react'
import style from './chatHeader.module.css'

export const ChatHeader = ({
  name,
  avatar,
}: {
    name: string;
    avatar: ReactNode;
  }) => {
  return (
    <div className={style.chatheader}>
      <div className={style.chatheader_avatar}>
        {avatar}
      </div>
      <span className={style.chatheader_name}>
        {name}
      </span>
    </div>
  )
}
