import Chat from "../Components/Chat";
import ChatLog from "../Components/ChatLog";

function ChatPage() {



    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/kindle.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '140vh' }}>
            <div className="row justify-content-center pt-5">
                <div className="col-md-3 mt-5 rounded my-auto" style={{backgroundColor: 'whitesmoke'}}>
                   <h3 className="font-baskerville text-center">Chat with us</h3>
                   <ChatLog />

                </div>
            </div>
        </div>
            
        
    )
}

export default ChatPage