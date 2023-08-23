import { MouseEvent } from 'react'
import style from './textButton.module.css'

export const TextButton = ({
  text,
  handleClick,
}: {
    text: string;
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  }) => {
  return (
    <button 
      className={style.textbutton}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
