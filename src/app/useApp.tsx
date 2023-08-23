import RouterStore from '../store/RouterStore'

export const useApp = () => {
  const { route } = RouterStore 
  return { route }
}
