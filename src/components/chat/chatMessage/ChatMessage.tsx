import { ReactNode } from 'react'
import style from './chatMessage.module.css'

export const ChatMessage = ({
    avatar,
    name,
    text,
    time,
    handleDeleteMessage,
    isCurrentUserMessage,
}: {
    avatar: ReactNode;
    name: string;
    text: string;
    time: string;
    handleDeleteMessage: () => void;
    isCurrentUserMessage: boolean; 
  }) => {
  return (
    <div className={`${style.chatmessage} ${isCurrentUserMessage ? style.chatmessage__currentuser : ''}`}>
      <div className={style.chatmessage_avatar}>
        {avatar}
      </div>
      <div className={style.chatmessage_main}>
        <span className={style.chatmessage_name}>
          {name}
        </span>
        <p className={style.chatmessage_text}>
          {text}
        </p>
        <div className={style.chatmessage_additional}>
          {isCurrentUserMessage &&
            <div
              onClick={handleDeleteMessage}
              className={style.chatmessage_delete}>
              <img src="close.svg" alt="delete" />
            </div>
          }
          <span className={style.chatmessage_time}>
            {time} 
          </span>
        </div>
      </div>
    </div>
  )
}
