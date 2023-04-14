import { Fragment } from 'react';
import './App.css';
// import Section from './컴포넌트합성';
// import MyComponent from './MyComponent';
// import Person from './Person';
// import Say from './Say';
// import Clock from './Clock';
// import EventHander from './EventHander';
// // import FruitSelect from './SelectBox';
// import RadioButton from './RadioBox';
// import TableMap from './TableMenu';
// import CreateRef from './Ref';
// import MapTest from './MapTest';
// import IterationSample from './IterationSample';
// import UseState from './UserState';
import UserState from './명함만들기';


// //컴포넌트는 항상 대문자로 시작하고, 반환값으로 UI요소를 반환함
// function WelcomeProps(props){
//   return <h1>hello, {props.name}</h1>
// }


//function App() 
const App = () => { 
  const personData = {
    name : "이태석",
    age : 18,
    gender : "남성"
  }
  
  return (
    
    <>
    {/* <Section title ="오늘의 날씨 " contents="오늘은 흐리고 돌풍이 예상됩니다." />
    
    <Section title ="오늘의 스포츠 " contents="LG vs 두산 경기가 잠실에서 열립니다.." /> */}
    {/* <MyComponent name="이태석" age="23" >{insideTag}</MyComponent> */}
    {/* <Person {...personData} /> */}
    {/* <Say {...Say}/> */}
    {/* <Clock /> */}
    {/* <EventHander /> */}
    {/* <FruitSelect /> */}
    {/* <RadioButton /> */}
    {/* <TableMap /> */}
    {/* <CreateRef /> */}
    {/* <MapTest /> */}
    {/* <IterationSample /> */}
    {/* <UseState /> */}
    <UserState />
    </>
  );
  
}


export default App;
