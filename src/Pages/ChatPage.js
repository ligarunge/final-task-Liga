import ChatLog from "../Components/ChatLog";

function ChatPage() {



    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/reading.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '120vh' }}>
            <div className="row justify-content-center pt-5">
                <div className="col-md-4 mt-5 pt-5 rounded" style={{minHeight: '30rem', backgroundColor: 'rgb(197, 176, 141)'}}>
                   <h3 className="font-baskerville text-center">Chat with us</h3>
                   <ChatLog />

                </div>
            </div>
        </div>
            
        
    )
}

export default ChatPage