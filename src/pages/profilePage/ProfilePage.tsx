import { TextButton } from '../../atoms/textButton/TextButton'
import { useProfile } from './useProfile'
import style from './profilePage.module.css'

export const ProfilePage = () => {
  const {name, setName, handleSlubmit} = useProfile()
  return (
    <form className={style.profilepage} onSubmit={handleSlubmit}>
      <input 
        className={style.profilepage_input}
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Введите имя пользователся"
      />
      <TextButton text="Сохранить" handleClick={handleSlubmit} /> 
    </form>
  )
}
