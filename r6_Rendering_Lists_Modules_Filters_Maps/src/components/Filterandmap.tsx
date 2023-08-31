import React from 'react'
import { people } from './data'

export default function Filterandmap() {

    const chemists = people.filter(person => person.profession === 'chemist');

    const list= chemists.map(person=><li>person</li>)


  return (
    <div>Filter and Map and export

        <ul>{list}</ul>









    </div>
  )
}
