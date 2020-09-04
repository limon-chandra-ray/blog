import React,{useState} from 'react'
import './style.css'
export default function Home() {
    const[islit,setlit] = useState(false)
    function lightChange(){
        setlit(!islit)
    }
    const[age,setAge] = useState(21)
    const ageChange=()=>{
        setAge(age+1)
    }
    const hello = "Hello "+ age  +"World";
    return(
        <div className="row">
            <div className="col-md-6">
                <p className={` ${ islit? 'red' : 'drak'}`}> this {hello} light is {islit?'red':'drak'}</p>
                <button className={` ${ islit? 'red' : 'drak'}`} onClick={lightChange}> Light </button>
            </div>
            <div className="col-md-6">
                <p className={` ${ islit? 'red' : 'drak'}`}>this is my age: {age}</p>
                <button onClick={ageChange}>Upate Age</button>
                <button className={` ${ islit? 'red' : 'drak'}`} onClick={()=>{setAge(age-1)}}>decrement Age</button>
            </div>
            
        </div>
    )
}
