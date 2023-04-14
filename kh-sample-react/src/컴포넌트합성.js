// 리액트를 사용하기 위해 필요한 모듈을 불러오는 코드
import React from "react";

function Heading(props){
    return <h1>{props.text}</h1>;
}

function Paragraph(props){
    return <p>{props.text}</p>;
}

// function Section(props){
const Section = props=>{
    return (
        <>
            <Heading text={props.title} />
            <Paragraph text={props.contents} />
            
        </>
    )
}

export default Section;
