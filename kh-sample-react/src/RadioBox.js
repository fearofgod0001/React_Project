import {useState} from 'react';

const RadioButton = () =>{
    const[value,setValue] = useState("apple");
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return(
        <div>
            <input type="radio" name="fruit" value="apple" onChange={handleChange}/>
            <label>사과</label>
            <br></br>
            <input type="radio" name="fruit" value="orange" onChange={handleChange}/>
            <label>orange</label>
            <br></br>
            <input type="radio" name="fruit" value="strawberry" onChange={handleChange}/>
            <label>strawberry</label>
            <br></br>
            <p>선택된 과일은 : {value} 입니다.</p>

        </div>
    );
}

export default RadioButton;