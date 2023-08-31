import React, { useState } from 'react'

export default function DropDown() {



    const[value, setValue]=useState("Select any Option")

    function clickedA(){

        setValue("A")
    }

    function clickedB(){

        setValue("B")
    }

    function clickedC(){

        setValue("C")
    }


    return (
        <div>


 
            <div className=" container dropdown">

                <input className="form-control" id="disabledInput" type="text" value={value}></input>



                <button className="btn btn-secondary dropdown-toggle my-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Drop Down
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={clickedA}>A</button></li>
                    <li><button className="dropdown-item" onClick={clickedB}>B</button></li>
                    <li><button className="dropdown-item" onClick={clickedC}>C</button></li>
                </ul>
            </div>








        </div>
    )
}
