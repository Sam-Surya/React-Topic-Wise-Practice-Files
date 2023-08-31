import React from 'react'



const people: string[] = [
    'Creola Katherine Johnson',
    'Mario José Molina-Pasquel Henríquez',
    'Mohammad Abdus Salam',
    'Percy Lavon Julian',
    'Subrahmanyan Chandrasekhar'
    ];

    
export default function Witharrays() {

    


        const listItems: JSX.Element[] = people.map((person: string) => <li>{person}</li>);





    return (
        <div>Witharrays

           




             <ul>{listItems}</ul>

        </div>
    )
}
