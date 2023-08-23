import { ReactNode, FormEvent } from 'react'
import style from './chatInput.module.css'

export const ChatInput = ({
  value,
  handleChange,
  handleSubmit,
  button,
}: {
    value: string;
    handleChange: (value: string) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    button: ReactNode;
  }) => {
  return (
    <form 
      onSubmit={handleSubmit}
      className={style.chatinput}
    >
      <input 
        className={style.chatinput_input} 
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Напишите сообшение..."
      /> 
      {button}
    </form>
  )
}
