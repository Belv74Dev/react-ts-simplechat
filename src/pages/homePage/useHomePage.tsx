import DialogsStore from '../../store/DialogsStore'

export const useHomePage = () => {
  const { openDialogId } = DialogsStore

  return {
    openChat: openDialogId
  }
}
