import { useState } from "react"
import { createMessage } from "../API/messages"

function CreateNewMessage(props) {

    const { loadMessages } = props
    const [newUsername, setNewUsername] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [messageCreating, setMessageCreating] = useState(false)

    const createMessageAction = async () => {
        setMessageCreating(true)
        await createMessage(newUsername, newMessage)
        await loadMessages()
        setMessageCreating(false)
        setNewMessage('')

    }

    return (
        <div>
            <div className="row ">
                <div className="col-12">
                    <input
                        type="text"
                        placeholder="Username"
                        className="m-2 p-2 rounded border-0 text-start"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="row align-items-center mb-3">
                <div className="col-9">
                    <input
                        type="text"
                        style={{ height: "5rem", width: "20rem"}}
                        placeholder="Message"
                        className="m-2 p-2 g-0 rounded border-0"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    ></input>
                </div>
                <div className="col-2">
                    <button
                        className="btn btn-success m-2"
                        disabled={messageCreating}
                        onClick={createMessageAction}
                    >Send</button>
                </div>
            </div>
        </div>
    )
}
export default CreateNewMessage