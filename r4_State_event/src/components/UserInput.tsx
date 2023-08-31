import React, { useState } from 'react'

export default function UserInput() {


    const [value,setValue]=useState("")

    function inputHandler(event:any){

        setValue(event.target.value)

    }

    function convertUpper(){

        setValue(value.toUpperCase())
    }
  return (
    <div className='container'>

        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Something</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={inputHandler} value={value}/>
   
  </div>
        <button type="button" className="btn btn-dark" onClick={convertUpper}>Convert</button>
    </div>
  )
}
