import React, { useState } from 'react';
import io from "socket.io-client";
import Chats from '../Components/Chats';

const Login = () => {
    const socket = io.connect("http://localhost:8000")

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('')
    const [show, setShow] = useState(false)


    const submit = (state) => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room)
            setShow(true)
        } else {
            alert("please Fill all the  Inputs 1)User Name, 2) Password")
        }
    }
    
    return (<>

        {!show ? (

            <div className='login joinChatContainer'>
                
                <h1>Welcome to ChatBox<i class="fa-brands fa-rocketchat"></i></h1><br></br>
                <div className=' '><i class="fa-solid fa-user"></i>
                    <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter Your Name"
                    /><br />

                    <i class="fa-solid fa-key"></i>
                    <input type="text" onChange={(e) => { setRoom(e.target.value) }} placeholder="Enter Group Id/Name" /><br />

                    <button onClick={submit} style={{ backgroundColor: "green" }}>
                    <i class="fa-solid fa-check"></i>   Submit</button>
                </div>
                <p>you just have to  Enter you name in 1st input</p> <p>   in 2nd input  you have to pass gourp id</p>

            </div>) : (<Chats socket={socket} username={username} room={room} />)}
    </>
    )
}

export default Login