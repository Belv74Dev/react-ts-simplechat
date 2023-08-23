import { ChatHeader } from './chatHeader/ChatHeader'
import { ChatInput } from './chatInput/ChatInput'
import { ChatMessageList } from './chatMessageList/ChatMessageList'
import { ChatMessage } from './chatMessage/ChatMessage'
import { observer } from 'mobx-react-lite'
import { Avatar } from '../../atoms/avatar/Avatar'
import { timeformating } from '../../services/formating'
import { TextButton } from '../../atoms/textButton/TextButton'
import { useChat } from './useChat'
import { useChatMessage } from './useChatMessage'
import style from './chat.module.css'
import { UserType } from '../../types'

export const Chat = observer(() => {
  const {chatMessages, users, chatUser} = useChat()
  const {
    newTextMessage,
    setNewTextMessage,
    handleSendMessage,
    handleDeleteMessage,
  } = useChatMessage()

  return (
    <div className={style.chat}>
      <ChatHeader 
        name={chatUser.name} 
        avatar={
          <Avatar 
            src={chatUser.avatar}
            alt={chatUser.name}
            size='lg'
          />
        }
      />
      <ChatMessageList>
        {chatMessages.map(({id, text, date, user_id}) => {
          const user = users.get(user_id) as UserType 
          const messageDate = new Date(date)
          const time = timeformating(
            messageDate.getHours(), 
            messageDate.getMinutes()
          )
          return (
            <ChatMessage 
              key={id}
              avatar={
                <Avatar 
                  src={user.avatar} 
                  alt={user.name}
                  size="lg"
                />
              }
              name={user.name}
              text={text}
              time={time}
              handleDeleteMessage={() => handleDeleteMessage(id)}
              isCurrentUserMessage={chatUser.id !== user_id} 
            />        
          )})}
      </ChatMessageList>     
      <ChatInput
        handleSubmit={handleSendMessage}
        value={newTextMessage}
        handleChange={setNewTextMessage}
        button={
          <TextButton 
            text="Отправить"
            handleClick={handleSendMessage}
          />
        }
      />
    </div>
  )
})
