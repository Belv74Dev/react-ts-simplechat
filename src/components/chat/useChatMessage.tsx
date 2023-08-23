import { useState, MouseEvent, FormEvent } from 'react'
import MessagesStore from '../../store/MessagesStore'
import UserStore from '../../store/UserStore'
import DialogsStore from '../../store/DialogsStore'

export const useChatMessage = () => {
  const { addMessage, delMessage, getLastMessage } = MessagesStore 
  const { currentUserId } = UserStore
  const { openDialogId, updateLastMessageId, openDialog} = DialogsStore

  const [newTextMessage, setNewTextMessage] = useState('') 

  const handleSendMessage = (e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (newTextMessage.trim() === '')
      return

    setNewTextMessage('')
    const newMessageId = addMessage(currentUserId, openDialogId as number, newTextMessage)
    updateLastMessageId(newMessageId)
  }

  const handleDeleteMessage = (messageId: number) => {
    delMessage(messageId)
    if (openDialog.last_message_id === messageId) {
      const lastMessage = getLastMessage(openDialogId as number)
      updateLastMessageId(lastMessage?.id ?? null)
    }
  }

  return {
    newTextMessage, 
    setNewTextMessage, 
    handleSendMessage,
    handleDeleteMessage,
  }
}
