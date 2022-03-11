import { deleteMessage } from "../API/messages"

function Message(props) {

    const { message, loadMessages } = props
    
    const deleteMessageAction = () => {
        deleteMessage(message.id)
        loadMessages()
    }

    return (
        <div>
            <div className="card">
                <div className="card-title">
                    {message.title}
                </div>
                <div className="card-body">
                    {message.message}
                    <span>
                        <button 
                            className="btn btn-outline btn-sm m-2"
                            onClick={deleteMessageAction}
                            >x</button>
                    </span>
                </div>


            </div>
        </div>
    )
}

export default Message