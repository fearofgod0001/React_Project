import { useRef, useState } from "react";

const CreateRef = () => {
    const inputRef = useRef(null); //유저 ref함수 호출
    const handleFocus = () =>{
        inputRef.current.disabled=false;
        inputRef.current.focus();
    };
    return(
        <>
            <input disabled type="text" ref={inputRef} />
            <button onClick={handleFocus}>활성화</button>
        </>
    );
}

export default CreateRef;