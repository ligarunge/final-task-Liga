import { useState } from "react"
import { createMessage } from "../API/messages"

function CreateNewMessage(props) {

    const { loadMessages } = props
    const [newUsername, setNewUsername] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [messageCreating, setMessageCreating] = useState(false)

    const createMessageAction = async () => {
        setMessageCreating(true)
        await createMessage(newUsername)
        await createMessage(newMessage)
        await loadMessages()
        setMessageCreating(false)
        setNewMessage('')
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
            ></input>
            <input
                type="text"
                placeholder="Message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            ></input>
            <button
                className="btn btn-primary"
                disabled={messageCreating}
                onClick={createMessageAction}
                >Send</button>
        </div>
    )
}
export default CreateNewMessage