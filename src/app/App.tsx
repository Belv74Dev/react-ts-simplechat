import { Header } from '../components/header/Header'
import { HomePage } from '../pages/homePage/HomePage'
import { ProfilePage } from '../pages/profilePage/ProfilePage'
import { observer } from 'mobx-react-lite'
import style from './app.module.css'
import { useApp } from './useApp'

export const App = observer(() => {
  const { route } = useApp()
  return (
    <div className={style.app}>
      <Header />
      <main className={style.app_main}>
        {{
          '/':        <HomePage />,
          '/profile': <ProfilePage />,
        }[route]}
      </main>
    </div>
  )
})
