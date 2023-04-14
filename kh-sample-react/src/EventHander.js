import { useState} from "react";

const EventHander = () => {
    // const[message , setMessage] = useState("안녕하세요");
    // const changeMsg = (e) => {
    //     setMessage(e.target.value);
    // }
    // ----------------
    const [userName,setUserName] = useState("");
    const [message, setMessage] = useState("");
    const onChangeUserName = e => setUserName(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () =>{ 
        alert(userName + " : " + message);
        setMessage("");
        setUserName("");
    }
    const onKeyPress = e => {
        if(e.key === "Enter")onClick();
    }

    return(
        <>
         {/* <h1>이벤트 연습</h1>
         <input type="text" name="message" placeholder="아무거나 입력하세요" onChange={changeMsg}></input>
         <input type="text" name="message" placeholder="아무거나 입력하세요" onChange={changeMsg}></input>
         <h2>입력 받은 메시지 : {message}</h2> */}
         {/* -------------- */}
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="사용자명" value={userName} 
         onChange={onChangeUserName}/>
         
         <input type="text" name="message" placeholder="입력" value={message}
         onChange={onChangeMessage} onKeyDown={onKeyPress}/>
         <button onClick={onClick}>확인</button>
        
        </>
    );

}
export default EventHander;