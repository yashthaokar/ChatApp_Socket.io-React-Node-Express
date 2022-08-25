import "./App.css";
// import { useState } from "react";
// import io from "socket.io-client";
import Login from "./Login/Login";
function App() { return (
   <div className="App">
<Login/></div>)
}

  // // we make connection  with  backend..
  // const socket = io.connect("http://localhost:8000");

  // const [user, setUser] = useState({
  //   name: "",
  //   room: "",
  // });
  // const changeHandler = (e) => {
  //   setUser({ ...user,[e.target.name]:e.target.value });
  //   console.log(user);
  // };
  // // const joinRoom=(user)=>{
  // //   if(user.name!=="" && user.room!==""){
  // //     socket.emit("join_room", user.room)
  // //   }

  // // }

  // return (
  //   <div className="App">
  //     <h4>Join the Chat Room</h4>
  //     <input
  //       type="text"
  //       placeholder="name"
  //       onChange={changeHandler}
  //       value="user.name"
  //       name="name"
  //     />
  //     <input
  //       type="text"
  //       placeholder="RoomID"
  //       onChange={changeHandler}
  //       value="user.room"
  //       name="room"
  //     />
  //     <button>Join!!</button>
  //   </div>
 // );
//}

export default App;
