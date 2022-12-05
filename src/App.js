import { useSelector,useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increment = ()=>{
    dispatch({type:'increment'})
  }

  const decrement = ()=>{
    dispatch({type:'decrement'}) 
  }

  const addBy = ()=>{
    dispatch({type:'addby',payload : 10}) 
  }
  return (
    <div className="App">
      <h1>Counter App</h1> 
      <button style={{width:'2rem',height:'2rem',marginRight:'5px'}} onClick={decrement}>-</button>
      <span style={{fontSize:'2rem'}}>{counter}</span>
      <button style={{width:'2rem',height:'2rem',marginLeft:'5px'}} onClick={increment}>+</button><br /><br />
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
