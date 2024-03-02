import{useState} from 'react';
function Counter(){
    const [count,setcount]=useState(0)// 
    const handleIncrement = ()=>{
        
       setcount(count+1)
        console.log(count)
    }
    const handleDecrement = ()=>{
        
       setcount(count-1)
        console.log(count)
    }
    return(
        <div>
        <h1>{count}</h1>
        
        <button onClick={handleIncrement}>Increment</button>
        
        <button onClick={handleDecrement}>Decrement</button>
        
        </div>
    )
}
export default Counter;//by default function export karta hai