import { ReactNode } from 'react'
import style from './chatMessageList.module.css'

export const ChatMessageList = ({
  children
}: 
  {
    children: ReactNode;
  }) => {
  return (
    <div className={style.chatmessagelist}>
      {children}
    </div>
  )
}
