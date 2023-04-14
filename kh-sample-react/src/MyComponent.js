import React from "react";


// props 기본 값 설정 : defaultProps
// props 값을 따로 지정하지 않은 경우, 보여 줄 기본 값을 설정합니다.
// children : 태그 사이의 내용을 전달 받아서 보여줌

//구조분해(비구조화할당) : 배열이나 객체의 속성 혹은 값을 해체하여 그 값을 변수에 담아 표현하는
//자바스크립트 표현식
const MyComponent = ({name,children,age}) =>{
    // const {name , children} = props;
    return (
        <>
            <p>안녕하세요 . 제 이름은 {name} 입니다. </p>
            <p>저의 취미는 {children} 입니다. </p>
            <p>저의 나이는 {age} 입니다. </p>
        </>
    );
}


MyComponent.defaultProps = {
    name : "기본 이름",
    age : 0
}
export default MyComponent;