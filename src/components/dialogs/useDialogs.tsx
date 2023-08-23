import DialogsStore from '../../store/DialogsStore'

export const useDialogs = () => {
  const { 
    dialogs, 
    openDialogId, 
    setOpenDialogId,
    setReadDialog,
  } = DialogsStore

  const handleOpenDealog = (dialogId: number): void => {
    setOpenDialogId(dialogId)
    setReadDialog()
  }

  return {dialogs, openDialogId, handleOpenDealog}
}
