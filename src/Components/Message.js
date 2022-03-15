import { deleteMessage } from "../API/messages"
import Time from 'react-time-format'
import "./Message.css"

function Message(props) {

    const { message, loadMessages } = props
    
    const deleteMessageAction = async () => {
        await deleteMessage(message._id)
        await loadMessages()
    }

    return (
        <div className="p-2">
            <div className="alert alert-secondary m-1 bubble-bottom-right" style={{borderRadius: '30rem', backgroundColor:'rgb(203, 229, 240)'}}>
                <p className="m-2 ms-5 me-5">
                    <h5 className="alert-heading font-baskerville d-flex justify-content-between" style={{fontSize:'1rem'}}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg> {message.title}
                        </span>
                        <span style={{ fontSize: '0.8rem' }}>
                            <Time value={message.createdAt} format="DD-MM-YYYY HH:mm" />
                        </span>
                    </h5>
                </p>
                <p className="font-baskerville m-3 ps-4 d-flex justify-content-between" style={{fontSize:'0.9rem'}}>
                    {message.message}
                    <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={deleteMessageAction}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg></button>
                </p>
            </div>
        </div>
    )
}

export default Message