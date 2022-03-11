import { useEffect, useState } from "react"
import { getMessages } from "../API/messages"
import CreateNewMessage from "./CreateNewMessage"
import MessageList from "./MessageList"

function ChatLog() {
   
    const [messages, setMessages] = useState([])
    const [usernames, setUsernames] = useState([])
    const [messagesLoading, setMessagesLoading] = useState(true)

    const loadMessages = async () => {
        setMessagesLoading(true)
        const messagesFromBackend = await getMessages()
        setMessages(messagesFromBackend)
        setUsernames(messagesFromBackend)
        setMessagesLoading(false)
    }

    useEffect(() => {
        loadMessages()
        //send a req to server
        // call the setMessages
    }, [])

    let messageList = <div><h5>Loading...</h5></div>
    if (messagesLoading === false && messages.length > 0) {
        messageList = <MessageList messages={messages} usernames={usernames} loadMessages={loadMessages} />
    } else if (messagesLoading === false && messages.length === 0) {
        <div><h5>No new messages</h5></div>
    }

    return (
        <div>
            {messageList}
            Create New Message:
            <CreateNewMessage loadMessages={loadMessages}/>
        </div>
    )
}

export default ChatLog