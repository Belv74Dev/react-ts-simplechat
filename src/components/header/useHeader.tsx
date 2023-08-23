import RouterStore from '../../store/RouterStore'
import UserStore from '../../store/UserStore'

export const useHeader = () => {
  const { route, setRoute } = RouterStore
  const { currentUser } = UserStore
  return { currentUser, route, setRoute } 
}
