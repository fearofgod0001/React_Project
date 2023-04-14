import React, { useState } from "react";


// useState()는 리액트에서 상태를 관리하기 위해 제공되는 훅(Hook)중 하나
// 상태를 변경해야 될 때마다 컴포넌트가 자동으로 다시 렌더링
// 배열 형태로 반환되며 첫 번쨰 요소는 현재 상태이고 두 번쨰 요소는 상태 변경하는 함수 

//연습문제
//- 이름, 직책, 회사명, 회사주소, 이메일, 전화번호를 입력 받아 명함 형태로 출력
//- 명함은 객체 리터럴로 관리 
//- 입력값의 변경은 useState 사용
//- 제출 버튼을 만들어 제출을 누르면 명함 형태로 출력
const UseState=()=>{
    const [value, setValue] = useState(0); //초기값을 0으로 설정

    return(
        <>
            <p>현재 카운터 값은 <b>{value}</b></p>
            <button onClick={()=>setValue(value +1 )}>값을 1증가 시키기</button>            
            <button onClick={()=>setValue(value -1 )}>값을 1감소 시키기</button>
        </>
    )
}

export default UseState;