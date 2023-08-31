import React from 'react'


interface ButtonProp{

    title:string

}


export default function Button (props:ButtonProp) {



  return (
    <div>


<div className="container d-grid gap-2 my-4">
  
  <button className="btn btn-primary" type="button">{props.title}</button>
</div>









    </div>
  )
}
