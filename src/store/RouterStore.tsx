import { makeAutoObservable } from 'mobx'

type RouteType = '/' | '/profile' 

class RouterStore {
  route: RouteType = '/'

  constructor() {
    makeAutoObservable(this) 
    this.setRoute = this.setRoute.bind(this)
  }

  setRoute(route: RouteType) {
    this.route = route
  }
}

export default new RouterStore()
