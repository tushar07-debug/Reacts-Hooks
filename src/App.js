import { useEffect, useRef, useState, useMemo, useCallback, useReducer, useLayoutEffect} from 'react';
import './App.css';
import useTushar from './hook/useTushar';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Profile from './components/Profile';
// import {useState} from 'react';
// import {useEffect, useState} from 'react';

function App() {

  //useState

  //example 1
  // const [color,setcolor] = useState('red');
  
  // const changecolor = ()=>
  // {
  // setcolor('blue')
  // }

  //example 2
  // const [brand,setbrand]=useState('lambo')
  // const [color,setcolor]=useState('red')
  // const [year,setyear]=useState('2023')
  // const [model,setmodel]=useState('rome')
  
  // const handlechange=()=>{
  //   setcolor('black')
  // }

  //example 3
  // const [car,setcar] = useState({
  //   brand:"lambo",
  //   color:"red",
  //   model:"rome",
  //   year:"2023"
  // });
  // const handlechange = ()=>{
  //   setcar((prev)=>{
  //   return {...prev,color:"blue"}
  //   })
  // }

  // const [counter,setcounter] = useState(0)
  // const inc = ()=>
  // {
  //   setcounter(counter=>counter+4)
  // }

  //useEffect(callback,dependency)
  // const[count,setcount] = useState(0)

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setcount(count=>count+1)
  //   }, 2000);
  // })
  //add dependency empty [] it will execute only once


  //useRef
  //example1
  // const [value,setvalue] = useState(0)
  // // const [count ,setcount] = useState(0)
  // // useEffect(()=>{
  // //   setcount(prev=>prev+1)
  // // })

  // const count = useRef(0)
  // console.log(count);
  // // const vat = count;
  // useEffect(()=>{
  //   count.current = count.current+1
  // })

  //examle2
  // const inputElem = useRef()
  // const btnclick=()=>{
  //   console.log(inputElem.current);
  //   inputElem.current.style.background = "blue"
  // }

  //useMemo
  //example1
  // const [number,setnumber] = useState(0)
  // const [counter,setcounter] = useState(0)
  // function cube(num)
  // {
  //   console.log('done');
  //   return Math.pow(num,3)
  // }

  // const result = cube(number)

//example2
// const [number,setnumber] = useState(0)
//   const [counter,setcounter] = useState(0)
//   function cube(num)
//   {
//     console.log('done');
//     return Math.pow(num,3)
//   }

//   const result = useMemo(()=>{
//     return cube(number)
//   },[number ]);

//usecallback
//example1
// const [count,setcount] = useState(0)
// const newFn = useCallback(()=>{},[])


//useContextHook
//example1

//useReducer
//example1
// const[count,setcount] = useState(0)

//example2 
// const initialState = {count:0}
// const reducer = (state,action) =>{
//   switch(action.type)
//   {
//     case 'increase':{
//       return{count:state.count+1}
//     }
//     case 'decrease':{
//       return{count:state.count-1}
//     }
//     case 'input':{
//       return {count:action.payload}
//     }
//     default:{
//       return state
//     }
//   }
//   return {count: state.count+1}
   
// }
// const [state,dispatch]=useReducer(reducer, initialState)


//uselayouthook
//example1
// useEffect(()=>{
//   console.log("message form use effect");
// },[])
// useLayoutEffect(()=>{
//   console.log("message form layouteffect");
// },[])

//custom hooks
// const [name,setname] = useState(
//   localStorage.getItem('username')?
//   localStorage.getItem('username'):''
// );

// useEffect(()=>{
//   localStorage.setItem('username',name)
// },[name])

//customhooks
//example1
const [name,setname]  = useTushar('username','')

  return (
    <>

    {/* useState */}
    {/* <h1>my favrouite colr is {color}!</h1>
    <button onClick={changecolor}>blue</button> */}


    {/* <h1>My {car.brand}</h1>
    <h2>it is a {car.color} {car.model} from {car.year}</h2>
    <button onClick={handlechange}>change</button> */}

    {/* <h1>Count:{counter}</h1>
    <button onClick={inc}>inc*4</button> */}

    {/* useEffect */}
    {/* <h1>I've Rendered {count} times!</h1> */}

    {/* useRef */}
    {/* example 1 */}
    {/* <button onClick={()=>{setvalue(prev=>prev-1)}}>-1</button>
    <h1>{value}</h1>
    <button onClick={()=>{setvalue(prev=>prev+1)}}>+1</button>
    <h1>render time:{count.current}</h1> */}

    {/* example2 */}
    {/* <input type="text" ref={inputElem}/>
    <button onClick={btnclick}>click</button> */}

{/* useMemo */}
{/* example1 */}
{/* <input type="number" value={number} onChange={(e)=>{setnumber(e.target.value)}}/>
<h1>cube of the num:{result}</h1>
<button onClick={()=>{setcounter(counter+1)}}>counter++</button>
<h1>counter:{counter}</h1> */}

{/* example2 */}
{/* <input type="number" value={number} onChange={(e)=>{setnumber(e.target.value)}}/>
<h1>cube of the num:{result}</h1>
<button onClick={()=>{setcounter(counter+1)}}>counter++</button>
<h1>counter:{counter}</h1> */}

{/* usecallback */}
{/* example1 */}
{/* <Header newFn= {newFn}/>
<h1>{count}</h1>
<button onClick={()=>setcount(prev=>prev+1)}>click here</button> */}

{/* useContextHook */}
{/* example1 */}
{/* <Header/>
<Profile/>
<Footer/> */}

{/* useReducer */}
{/* example1 */}
{/* example2 */}
{/* <h1>{state.count}</h1>
<button onClick={()=>dispatch({type:'increase'})}>inc</button>
<button onClick={()=>dispatch({type:'decrease'})}>dec</button>
<input value={state.count} onChange={(e)=>dispatch({type:'input', payload:Number(e.target.value)})}
type="number"/> */}

{/* useLayout hook  */}
{/* example1 */}
{/* <h2>Test mesage</h2>
{Array(40000).fill('').map((itme,index)=>(
  <li key={index}>{Math.pow(Math.random(),10)}</li>
))} */}


{/* customhooks */}
<input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setname(e.target.value)}/>
<h2>Hello,{name}!!</h2>
  </>
  );
}

export default App;
