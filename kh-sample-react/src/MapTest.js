import React,{useTransition} from "react";
//컴포넌트를 만들고 props로 전달하기
const User = (props) =>{
    return(
      <>
        <b>{props.user.userName}</b><span>{props.user.email}</span>
      </>  
    );
}

//비효율적인 방법: 
const MapTest = () => {
        const users=[
            {
                id: 100,
                userName : "천지훈",
                eMail : "1000won@gmail.com"
            },
            {
                id: 200,
                userName : "백마리",
                eMail : "2000won@gmail.com"

            },
            {
                id: 300,
                userName : "십마리",
                eMail : "3000won@gmail.com"
            },
            {
                id: 400,
                userName : "d십마리",
                eMail : "4000won@gmail.com"
            }
        ];

        const numbers = [1,2,3,4,5];
        const listItems = numbers.map(e => <li>{e}</li>)

    return(
        <>
            {/* <div>
                <b>{users[0].userName}</b> <span>{users[0].eMail}</span>
            </div>
            <div> 
                <b>{users[1].userName}</b> <span>{users[1].eMail}</span>
            </div>
            <div>
                <b>{users[2].userName}</b> <span>{users[2].eMail}</span>
            </div>

            <div>
                <User user={users[0]}/>
            </div>
            <div>
                <User user={users[1]}/>
            </div>
            <div>
                <User user={users[2]}/>
            </div> */}

            {/* numbers && = if(number에 데이터가 있다면) */}
            <ul>{numbers && numbers.map(e => <li>{e}</li>)}</ul>

            {users && users.map(user =>  <div key={user.id}><b>{user.userName}</b><span>{user.eMail}</span></div>)}
        </>
    );
}

export default MapTest;