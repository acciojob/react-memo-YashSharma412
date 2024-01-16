import React from 'react'

function Counter({dataObj, setDataObj}) {
  return (
    <div>
        <p>Count: <span id='incr-cnt' >{dataObj.count}</span></p>
        <button  onClick={()=>setDataObj({...dataObj, count: dataObj.count + 1})}>+</button>
        <h1>Expensive Calculation</h1>
        <p>1000000000</p>
    </div>
  )
}

export default Counter;