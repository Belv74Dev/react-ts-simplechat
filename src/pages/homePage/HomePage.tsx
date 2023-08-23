import { Sidebar } from '../../components/sidebar/SideBar'
import { Dialogs } from '../../components/dialogs/Dialogs'
import { Chat } from '../../components/chat/Chat'
import { useHomePage } from './useHomePage'
import style from './homePage.module.css'
import { observer } from 'mobx-react-lite'

export const HomePage = observer(() => {
  const { openChat } = useHomePage()
  return (
    <>
      <Sidebar>
        <Dialogs /> 
      </Sidebar>
      <div className={style.homepage_content}>
        {openChat 
          ? <Chat />
          : <span className={style.homepage_noncontent}>
            Выберите, кому хотели бы написать
          </span>
        }
      </div>
    </>
  )
})
