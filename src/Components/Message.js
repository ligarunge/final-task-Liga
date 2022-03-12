import { deleteMessage } from "../API/messages"

function Message(props) {

    const { message, loadMessages } = props

    const deleteMessageAction = async () => {
        await deleteMessage(message._id)
        await loadMessages()
    }

    return (
        <div>
            <div className="card border-light d-flex justify-content-between">
                <div className="card-header m-3">
                    {message.title}
                    <span className="m-3">{message.createdAt}</span>
                </div>
                <div className="card-body m-2 d-flex justify-content-between">
                    {message.message}
                    <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={deleteMessageAction}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg></button>
                </div>
            </div>
        </div>
    )
}

export default Message