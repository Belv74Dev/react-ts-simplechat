import { observer } from 'mobx-react-lite'
import { Avatar } from '../../atoms/avatar/Avatar'
import { DialogsItem } from './dialogsItem/DialogsItem'
import { useDialogs } from './useDialogs'
import { DialogSearch } from './dialogsSearch/DialogsSearch'
import style from './dialogs.module.css'
import { useDialogsFullData } from './useDialogsFullData'
import { useDialogsSearch } from './useDialogsSearch'

export const Dialogs = observer(() => {
  const {dialogs, openDialogId, handleOpenDealog} = useDialogs()
  const {dialogsFullData} = useDialogsFullData(dialogs)
  const {dialogsSearched, search, setSearch} = useDialogsSearch(dialogsFullData)

  return (
    <>
      <DialogSearch 
        search={search} 
        handleSearch={setSearch} 
      />
      <div className={style.dialogs}>
        {dialogsSearched.map(dialog => {
          const {id, user, lastMessage, unread} = dialog

          return (
            <DialogsItem 
              key={id}
              avatar={<Avatar src={user.avatar} alt={user.name} size="lg" />}
              name={user.name}
              message={lastMessage.text}
              date={lastMessage.date}
              unread={unread}
              onOpen={() => handleOpenDealog(id)}
              isOpen={id === openDialogId}
            />
          )
        })}
      </div>
    </>
  )
})
