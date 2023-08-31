import React from 'react'
import { Interface } from 'readline'


interface CardProp{
    name:string
    des:string
}


export default function Card(props:CardProp) {
  return (
    <div>


<div className="card container my-3" >
  
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.des}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        





    </div>
  )
}
