import { useEffect, useState } from "react"
import { getMessages } from "../API/messages"
import CreateNewMessage from "./CreateNewMessage"
import MessageList from "./MessageList"

function ChatLog() {

    const [messages, setMessages] = useState([])

    const [messagesLoading, setMessagesLoading] = useState(true)

    const loadMessages = async () => {
        setMessagesLoading(true)
        const messagesFromBackend = await getMessages()
        setMessages(messagesFromBackend)

        setMessagesLoading(false)
    }

    useEffect(() => {
        loadMessages()
        //send a req to server
        // call the setMessages
    }, [])

    let messageList = <div className="m-3 font-baskerville text-center">
        <div className="spinner-border" style={{width: '2rem', height: '2rem'}} role="status">
    <span className="visually-hidden">Loading...</span>
  </div></div>
    if (messagesLoading === false && messages.length > 0) {
        messageList = <MessageList messages={messages} loadMessages={loadMessages} />
    } else if (messagesLoading === false && messages.length === 0) {
        messageList = <div className="m-3 font-baskerville text-center"><h5>No new messages</h5></div>
    }

    return (
        <div>
            <div className="row justify-content-center m-2">
                <div className="col-12 rounded" style={{ height: '20rem', backgroundColor: 'whitesmoke', overflowY: 'scroll' }}>
                    {messageList}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 m-2 font-baskerville">
                   <span className="ms-2">Create New Message:</span> 
                    <CreateNewMessage loadMessages={loadMessages} />
                </div>
            </div>
        </div>
    )
}

export default ChatLog