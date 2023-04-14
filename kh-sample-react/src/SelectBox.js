import {useState} from "react";


//Select 콤보 박스 사용 하기
const FruitSelect = () =>{
    const [value,setValue]=useState("grape");
    const handleChange =(e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        alert("선택한 과일 : " + value);
        e.preventDefault(); // 창이 새로 고침 되는 걸 막음
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
            과일을 선택하세요. 
            <select value={value} onChange={handleChange}> 
                <option value="apple">apple</option>
                <option value="banana">banana</option>
                <option value="grape">grape</option>
                <option value="watermelon">watermelon</option>                       
            </select>
        </label>
        <button type="submit">제출</button>

      </form>
    );
}



export default FruitSelect;
