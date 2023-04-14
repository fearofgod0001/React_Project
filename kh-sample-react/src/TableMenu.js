import { useEffect, useState } from "react";


//배열로 구성된 객체를 전달받아 map으로 화면에 표시하고, 표시된 화면 영역에 이벤트 연결하기

const TableMap = () =>{
    const data = [
        {id : 100, name : "이태석", age : 123},
        {id : 200, name : "이새턱", age : 231},
        {id : 300, name : "이턱새", age : 122}
    ];

    const [mapData, setMapData] = useState("");

    useEffect(()=>{
        setMapData(data);
    },[]);

    const tableClickEvent = (item) =>{
        console.log(item);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
            <tbody>
                {mapData && mapData.map(item =>(
                    <tr key={item.id} onClick={()=>tableClickEvent(item)}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>                        
                        <td>{item.age}</td>
                    </tr>
                    ))}00
            </tbody>
        </table>
    );

}

export default TableMap;