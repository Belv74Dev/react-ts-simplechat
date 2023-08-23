import { observer } from 'mobx-react-lite'
import { Avatar } from '../../atoms/avatar/Avatar'
import { useHeader } from './useHeader'
import { Title } from '../../atoms/title/Titel'
import style from './header.module.css'

export const Header = observer(() => {
  const { setRoute, currentUser } = useHeader()
  return (
    <header className={style.header}>
      <button 
        className={style.header_logo} 
        onClick={() => setRoute('/')}
      >
        <Title text="SimpleChat" />
      </button>
      <div className={style.header_right}>
        <button 
          className={style.header_user} 
          onClick={() => setRoute('/profile')}
        >
          <span>{currentUser.name}</span>
          <Avatar src={currentUser.avatar} alt={currentUser.name} size="lg" />
        </button>
      </div>
    </header>
  )
})
