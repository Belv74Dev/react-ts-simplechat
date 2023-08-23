import { makeAutoObservable } from 'mobx'
import { DialogType } from '../types'
import { dialogsData } from './dialogsData'

class DialogsStore {
  dialogs: DialogType[] = dialogsData 
  openDialogId: number | null = null
 
  get openDialog(): DialogType {
    return this.dialogs.find((dialog) => 
      dialog.id === this.openDialogId
    ) as DialogType
  }
 
  constructor() {
    makeAutoObservable(this)
    this.setOpenDialogId = this.setOpenDialogId.bind(this)
    this.updateLastMessageId = this.updateLastMessageId.bind(this)
    this.setReadDialog = this.setReadDialog.bind(this)
  }

  setOpenDialogId(dialogId: number): void {
    this.openDialogId = dialogId 
  }

  updateLastMessageId(newLastMessageId: number | null): void {
    const dialog = this.dialogs.find(dialog => dialog.id === this.openDialogId)
    if (dialog) 
      dialog.last_message_id = newLastMessageId
  }

  setReadDialog(): void {
    const dialog = this.dialogs.find(dialog => dialog.id === this.openDialogId) 
    if (dialog)
      dialog.unread = 0
  }
}

export default new DialogsStore()
