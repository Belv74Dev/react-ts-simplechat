import MessagesStore from '../../store/MessagesStore'
import UserStore from '../../store/UserStore'
import { dateFormating } from '../../services/formating'
import { DialogType, UserType } from '../../types'

export const useDialogsFullData = (dialogs: DialogType[]) => {
  const { users, currentUserId } = UserStore
  const { getMessage } = MessagesStore

  const dialogsFullData = dialogs.map(dialog => {
    const message = getMessage(dialog.last_message_id)

    let lastMessageDate = ''
    if (message?.date)
      lastMessageDate = dateFormating(message.date)

    let lastMessageText = ''
    if (message?.text)
      lastMessageText = (message.id === currentUserId ? 'Вы: ' : '') + message.text
   
    return {
      ...dialog,
      user: users.get(dialog.user_id) as UserType,
      lastMessage: {
        text: lastMessageText,
        date: lastMessageDate,
      }
  }})

  return { dialogsFullData }
}
