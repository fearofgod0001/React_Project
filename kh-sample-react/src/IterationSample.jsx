import React, { useState } from "react";
import "./App.css";
const IterationSample=()=>{
    const [names, setNames] = useState([
        {id: 1, text: "눈사람"},
        {id: 2, text: "얼음"},
        {id: 3, text: "눈"},
        {id: 4, text: "바람"},
        


    ]);

    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId +1);
        setNames(nextNames);
        setInputText(""); //inputText를 비워줌
    }
    //filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아(true면 요소를 유지, false면 버림)
    // 새로운 배열로 반환함. callback 함수는 호출되는 배열을 변화시키지 않음.

    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const namesList = names.map(name => (
        <li key={name.id}onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>
    ));


    return(
        <>
            <p className="title-name">to do list</p>
            <p>삭제는 해당 항목을 더블클릭 하세요.</p>
            <input type="text" value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
}

export default IterationSample;