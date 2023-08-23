import { ReactNode } from 'react'
import style from './dialogsItem.module.css'

export const DialogsItem = ({
  avatar,
  name,
  message,
  date,
  unread,
  onOpen,
  isOpen,
}: {
    avatar: ReactNode;
    name: string;
    message: string;
    date: string;
    unread: number;
    onOpen: () => void;
    isOpen: boolean;
  }) => {
  return (
    <div 
      className={`${style.dialogsitem} ${
        isOpen ? style.dialogsitem__active : ''
      }`}
      onClick={onOpen} 
    >
      <div className={style.dialogsitem_avatar}>
        {avatar}
      </div>
      <div className={style.dialogsitem_user}>
        <span className={style.dialogsitem_user_name}>
          {name} 
        </span>
        <p className={style.dialogsitem_user_message}>
          {message} 
        </p>
      </div>
      <div className={style.dialogsitem_add}>
        <span className={style.dialogsitem_add_date}>
          {date}
        </span>
        {unread > 0 &&
          <span className={style.dialogsitem_add_unread}>
            {unread}
          </span>
        }
      </div>
    </div>
  )
}
