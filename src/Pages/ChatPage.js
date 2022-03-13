import ChatLog from "../Components/ChatLog";

function ChatPage() {

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/reading.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '120vh' }}>
            <div className="row justify-content-center pt-5">
                <div className="col-md-5 mt-5 pt-4 rounded" style={{ minHeight: '30rem', backgroundColor: 'rgb(147, 187, 166)' }}>
                    <h3 className="font-baskerville text-center mb-3">Chat with us</h3>
                    <ChatLog />
                </div>
            </div>
        </div>
    )
}

export default ChatPage