import { useState, FormEvent, MouseEvent } from 'react'
import UserStore from '../../store/UserStore'

export const useProfile = () => {
  const {currentUser, updateUserName} = UserStore
  const [name, setName] = useState<string>(currentUser.name)

  const handleSlubmit = (e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => {
    e.preventDefault() 
    
    if (!name.trim())
      return

    updateUserName(name)
  }

  return {name, setName, handleSlubmit}
}
