import { makeAutoObservable } from 'mobx'
import { UserType } from '../types'
import { userData } from './usersData'

class UsersStore {
  users: Map<number, UserType> = userData
  currentUserId: number = 1

  get currentUser(): UserType {
    return this.users.get(this.currentUserId) as UserType
  }

  constructor() {
    makeAutoObservable(this)
    this.updateUserName = this.updateUserName.bind(this)
  }

  updateUserName(name: string): void {
    console.log(name, this)
    this.currentUser.name = name
  }
}

export default new UsersStore
