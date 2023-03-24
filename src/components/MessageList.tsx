export const MessageList: React.FC<{
  data: string[]
}> = ({ data }) => (
  <ul data-testid="messageList">
    {data.map((message, i) => (
      <li key={i}>{message}</li>
    ))}
  </ul>
)
