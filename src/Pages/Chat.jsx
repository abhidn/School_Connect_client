import React, { useState, useEffect } from 'react'
import HomeHelper from '../Components/HomeHelper'
import { useSelector, useDispatch } from 'react-redux'
import { sendMessage, getPrivateConversation, getPrivateConversation2 } from '../redux/action/studentAction'
import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';
import "../stylesheets/chat.css"
// import Dateandtime from './DateandTime'
//Swap HelperFunction
function swap(input, value_1, value_2) {
    var temp = input[value_1];
    input[value_1] = input[value_2];
    input[value_2] = temp;
}


let socket;


const Chat = (props) => {

    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [room1, setRoom1] = useState("")
    const [room2, setRoom2] = useState("")
    const [receiverRegistrationNumber, setReceiverRegistrationNumber] = useState("")
    const [message, setMessage] = useState("")
    const [messageArray, setMessageArray] = useState([])
    const [olderMessages, setOlderMessages] = useState([])
    // const ENDPOINT = '"http://localhost"'
    const ENDPOINT = 'http://localhost:5000'
    // http://localhost:5000/api/student/getStudentByName
    // const ENDPOINT = 'https://apna-erp.herokuapp.com'

    useEffect(() => {
        let temp = props.match.params.room
        socket = io(ENDPOINT)
        let tempArr = temp.split(".")
        setReceiverRegistrationNumber(tempArr[0])
        setRoom1(temp)
        swap(tempArr, 0, 1)
        let tempRoom2 = tempArr[0] + '.' + tempArr[1]
        setRoom2(tempRoom2)
    }, [ENDPOINT, props.match.params.room])


    useEffect(() => {
        dispatch(getPrivateConversation(room1))
        dispatch(getPrivateConversation2(room2))
        socket = io(ENDPOINT)
        socket.emit('join room', {
            room1,
            room2
        })
        socket.on("new Message", (data) => {
            setMessageArray([...messageArray, data])
        })
        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [room1, room2])

    const Dateandtime = (obj) => {
        const startTime = new Date(obj.createdAt);
        let text = startTime.toString();
        return <>{text.substr(0, text.length - 30)}</>
    }

    const formHandler = (e) => {
        // e.preventDefault()
        if (message.trim().length > 0) {
            socket.emit("private message", {
                sender: store.student.student.student.name,
                message,
                room: room1
            })
            setMessage("")
            let messageObj = {
                roomId: room1,
                senderName: store.student.student.student.name,
                senderId: store.student.student.student._id,
                message,
                senderRegistrationNumber: store.student.student.student.registrationNumber,
                receiverRegistrationNumber
            }
            dispatch(sendMessage(room1, messageObj))
        }
        else {
            alert("Can't send empty message")
        }
    }
    console.log(store.student.student.student.name);

    useEffect(() => {
        socket.on("new Message", (data) => {
            setOlderMessages(store.student.privateChat)
            setMessageArray([...messageArray, data])
        })

    }, [messageArray, olderMessages])
    if (store.student.privateChat) {
        // console.log(store.student.privateChat)
        // console.log(store.student.privateChat.length)
        for (let i = 0; i < store.student.privateChat.length; i++) {
            var startTime = new Date(store.student.privateChat[i].createdAt);
            // console.log(startTime);

        }
    }
  
    return (
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 " style={{ marginTop: "50px"}}>
                            <form className="form" onSubmit={formHandler}>
                                <div className="form-group ">
                                    {/* <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type here.." type="text" className="form-control" /> */}
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type here.." type="text" className="form-control" style={{height: "300px"}}/>
                                </div>
                                <div style={{textAlign:"right"}}>
                                <button type="submit" className="btn btn-primary ml-1">Send</button>
                                </div>
                                
                            </form>
                        </div>
                        <div className="scrollBar col-md-7" style={{ overflowY: "scroll", marginTop: "20px", height: "510px", border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                            {
                                store.student.privateChat.map((obj, index) =>
                                    <div key={index} >
                                        {/* <p style={{ color: "black" }}>{obj.senderName}: {obj.message},{Dateandtime(obj)}</p> */}
                                        <div class="chat-messages">
                                            <div class="message-box-holder">
                                                <div class="message-box">
                                                {Dateandtime(obj)}
                                                </div>

                                            </div>

                                            <div class="message-box-holder">
                                                <div class="message-sender">
                                                    {obj.senderName}
                                                </div>
                                                <div class="message-box message-partner">
                                                    {obj.message}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                            {messageArray.map((obj, index) =>
                                <p key={index}>{obj.sender}: {obj.message}</p>
                            )}

                        </div>

                    </div>

                </div>
            </> : (history.push('/'))}

        </div>
    )
}

export default Chat
