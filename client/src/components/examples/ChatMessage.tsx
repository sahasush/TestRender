import ChatMessage from '../ChatMessage'

export default function ChatMessageExample() {
  return (
    <div className="space-y-4 p-4 bg-background">
      <ChatMessage 
        role="assistant" 
        content="Hello! I'm here to support you through your perimenopause journey. How are you feeling today?" 
        timestamp="10:30 AM"
      />
      <ChatMessage 
        role="user" 
        content="I've been experiencing some hot flashes lately and my sleep hasn't been great." 
        timestamp="10:32 AM"
      />
      <ChatMessage 
        role="assistant" 
        content="I understand how challenging that must be. Hot flashes and sleep disturbances are common during this transition. Can you tell me more about when these hot flashes tend to occur?" 
        timestamp="10:33 AM"
      />
    </div>
  )
}
