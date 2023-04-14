//연습문제
//- 이름, 직책, 회사명, 회사주소, 이메일, 전화번호를 입력 받아 명함 형태로 출력
//- 명함은 객체 리터럴로 관리 
//- 입력값의 변경은 useState 사용
//- 제출 버튼을 만들어 제출을 누르면 명함 형태로 출력

import React, { useState } from "react";

//8. 네임카드 컴포넌트를 새로 생성해 props로 변수를 받아 출력할 수 있도록 한다.
const NameCard = (props) =>{
    return(
        <>
            <h3>명함 정보 출력</h3>
            <p>이름 : {props.member.name}</p>
            <p>직책 : {props.member.position}</p>
            <p>회사 : {props.member.company}</p>
            <p>주소 : {props.member.addr}</p>
            <p>메일 : {props.member.eMail}</p>
            <p>번호 : {props.member.phone}</p>
        </>
    );
};

const UserState = ()=>{ //1.컴포넌트 생성
    //2. UsetState는 2개 만든다
    //3. 하나의 member덩어리로 만들어야 함 useState에 기입시 중괄호{}를 통하여 구조분해식으로 넣는다.
    const [member, setMember] = useState({name:"",position:"",company:"",addr:"",eMail:"",phone:""});
    //4.false를 넣는 순간 submit는 boolean형 타입으로 자동 변환
    //  입력 받은 후 제출 버튼을 누르기 전까지는 화면에 출력 되지 않아야 함
    const [submit,setSubmit] = useState(false);
    //5. 객체를 구조 분해 하여 넣음 전개연산자와 같이 사용한다. 현재요소 member 객체를 분해하여 펼친다.
    //   펼쳐지면 name - position - ...순으로 펼쳐진다. 거기에 name: 에 value값을 넣는다.
    // e는 eventHander 로 onclick onchange등으로 ui가 있는 것들은 내부에 다 자동으로 만들어져있다.
    const onChangeName = (e) => setMember({...member, name:e.target.value});
    const onChangePos = (e) => setMember({...member,position: e.target.value});
    const onChangeCmp = (e) => setMember({...member,company: e.target.value});
    const onChangeAddr = (e) => setMember({...member,addr: e.target.value});
    const onChangeMail = (e) => setMember({...member,eMail: e.target.value});
    const onChangePhone = (e) => setMember({...member,phone: e.target.value});
    //6. 조건부 랜더링을 조건형을 통해 구현 미구현을 설정 할 수 있다. 
    const onSubmit = () =>{
        setSubmit(true);
    };

    return (
        <>
            <h1>회원 정보</h1>
            <input type="text" placeholder="이름 입력" value={member.name} onChange={onChangeName}/>
            <br />
            <input type="text" placeholder="직책 입력" value={member.position} onChange={onChangePos}/>
            <br />
            <input type="text" placeholder="회사명 입력" value={member.company} onChange={onChangeCmp}/>
            <br />
            <input type="text" placeholder="회사주소 입력" value={member.addr} onChange={onChangeAddr}/>
            <br />
            <input type="text" placeholder="이메일 입력" value={member.eMail} onChange={onChangeMail}/>
            <br />
            <input type="text" placeholder="전화번호 입력" value={member.phone} onChange={onChangePhone}/>
            <br />
            <button onClick={onSubmit}>제출</button>
            {/* 7. 조건부   submit && = if(NameCard member에데이터가 있다면) */}
            {submit && <NameCard member={member}/>}
        </>
    );
}
export default UserState;
