import MessagesStore from '../../store/MessagesStore'
import DialogsStore from '../../store/DialogsStore'
import UserStore from '../../store/UserStore'
import { UserType } from '../../types'

export const useChat = () => {
  const { users } = UserStore
  const { openDialogId, openDialog} = DialogsStore
  const { getChatMessages } = MessagesStore 

  const chatUser = users.get(openDialog.user_id) as UserType

  const chatMessages = getChatMessages(openDialogId as number)

  return {chatUser, chatMessages, users}
}
