export const NewMessageForm = () => {
  return (
    <>
      <input type="text" data-testid="messageText" />
      <button type="button" data-testid="sendButton">
        送信
      </button>
    </>
  )
}
