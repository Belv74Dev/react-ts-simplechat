import { makeAutoObservable } from 'mobx'
import { MessageType } from '../types'
import { messagesData } from './messageData'

class MessagesStore {
  messages: MessageType[] = messagesData 

  constructor() {
    makeAutoObservable(this)
    this.getMessage = this.getMessage.bind(this)
    this.delMessage = this.delMessage.bind(this)
    this.getLastMessage = this.getLastMessage.bind(this)
    this.addMessage = this.addMessage.bind(this)
    this.getChatMessages = this.getChatMessages.bind(this)
  }
  
  getMessage(messageId: number | null): MessageType | null  {
    if (messageId === null)
      return null

    const message = this.messages.find(message => message.id === messageId)
    if (message)
      return message
    return null
  } 

  getChatMessages(dialogId: number): MessageType[] {
    return this.messages
      .filter(message => message.dialog_id === dialogId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  addMessage(userId: number, dialogId: number, text: string): number {
    const newMessage = {
      id: Math.random() * (10000000 - 1) + 1,
      dialog_id: dialogId,
      user_id: userId, 
      text,
      date: String(new Date()),
    }
    this.messages.push(newMessage)
    return newMessage.id
  }

  delMessage(messageId: number): void {
    const index = this.messages.findIndex(message => message.id === messageId)
    if (index !== -1)
      this.messages.splice(index, 1)
  }

  getLastMessage(dialogId: number): MessageType | null {
    return this.getChatMessages(dialogId)[0] ?? null
  }
}

export default new MessagesStore()
