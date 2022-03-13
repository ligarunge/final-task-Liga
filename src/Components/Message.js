import { deleteMessage } from "../API/messages"
import Time from 'react-time-format'

function Message(props) {

    const { message, loadMessages } = props

    const deleteMessageAction = async () => {
        await deleteMessage(message._id)
        await loadMessages()
    }

    return (
        <div>
            <div className="alert alert-secondary m-1" style={{borderRadius: '30rem', borderBottomRightRadius: '0rem', backgroundColor:'rgb(203, 229, 240)'}}>
                <p className="m-3">
                    <h5 className="alert-heading font-baskerville d-flex justify-content-between">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg> {message.title}
                        </span>
                        <span style={{ fontSize: '1rem' }}>
                            <Time value={message.createdAt} format="DD-MM-YYYY HH:mm" />
                        </span>
                    </h5>
                </p>
                <p className="font-baskerville m-3 ps-4 d-flex justify-content-between">
                    {message.message}
                    <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={deleteMessageAction}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg></button>
                </p>
            </div>
        </div>
    )
}

export default Message