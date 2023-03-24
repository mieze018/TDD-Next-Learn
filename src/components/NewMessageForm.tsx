import { useState } from 'react'

export const NewMessageForm: React.FC<{
  onSend?: (message: string) => void
}> = ({ onSend }) => {
  const [message, setMessage] = useState('')
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value)
  const handleSend = () => {
    if (onSend) onSend(message)
    setMessage('')
  }
  return (
    <>
      <input
        type="text"
        data-testid="messageText"
        value={message}
        onChange={handleTextChange}
      />
      <button type="button" data-testid="sendButton" onClick={handleSend}>
        送信
      </button>
    </>
  )
}
