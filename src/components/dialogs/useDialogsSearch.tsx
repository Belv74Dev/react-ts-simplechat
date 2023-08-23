import { useState } from 'react'
import { DialogType, UserType } from '../../types'

type DialogsFullDataType = Pick<DialogType, 'id' | 'unread'> & {
  user: UserType;
  lastMessage: {
    text: string;
    date: string;
  };
}

export const useDialogsSearch = (dialogsFullData: DialogsFullDataType[]) => {

  const [search, setSearch] = useState('')

  const dialogsSearchind = () => {
    if (search)
      return dialogsFullData.filter(dialog => 
        dialog.user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ) 
    return dialogsFullData
  }

  const dialogsSearched = dialogsSearchind()


  return {dialogsSearched, search, setSearch}
}
