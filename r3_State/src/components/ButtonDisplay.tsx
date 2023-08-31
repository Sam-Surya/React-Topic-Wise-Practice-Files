import React, { useState } from 'react'



export default function ButtonDisplay() {


  const[value, setValue]= useState("Please Click the Button")

  function clicked(){

    if(value=="Please Click the Button")
       setValue("Button Clicked")

    else setValue("Please Click the Button")

  }


  return (
    <div>

       <div className='container my-4'>
    
       <input className="form-control" id="disabledInput" type="text" value={value}></input>


        <button type="button" className="btn btn-primary my-4"   onClick={clicked}>Click</button>

        </div>




    </div>
  )
}
