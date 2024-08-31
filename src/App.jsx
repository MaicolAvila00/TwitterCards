import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './Twitter-Follow-Card'

const users= [
    {
    Name : 'Pepito perez',
    Email: 'Pepas45',
    IsFollowing: true
    },
    {
     Name : 'mariano janes',
     Email: 'Jaend092',
     IsFollowing: false
    },
    {
        Name : 'jose antonio',
        Email: 'Antony230',
        IsFollowing: true
    },
    {
        Name : 'miguel salazar',
        Email: 'miguelito98',
        IsFollowing: false
    },     
    {
    Name : 'Juan jose',
    Email: 'Juangoll3',
    IsFollowing: true
    },
    {
    Name : 'Sebas Cruz',
    Email: 'Sebitas22',
    IsFollowing: false
    },
    {
        Name : 'Reinaldo Rojas',
        Email: 'Rey882',
        IsFollowing: true
    },
]

export function App () {

    return (
     <section className='Profiles'>
        {
            users.map(({Name,Email,IsFollowing}) =>( 
                <TwitterFollowCard
                key={Name}
                Name={Name}
                Email={Email}
                InitialIsFollowing={IsFollowing}
                >{name}
                </TwitterFollowCard>
           ) )   
       }
       </section>
    )
}