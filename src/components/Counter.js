import React from 'react'

function Counter({dataObj, setDataObj}) {
  return (
    <div>
        <span>Count: {dataObj.count}</span>
        <button onClick={()=>setDataObj({...dataObj, count: dataObj.count + 1})}>+</button>
        <h1>Expensive Calculation</h1>
        <p>1000000000</p>
    </div>
  )
}

export default Counter