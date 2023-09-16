import React from 'react';
import Card from './Card';
// import {characters} from './chars';
const cardList=({characters})=>{
    return (
    <div>
        {
            //robots is array of objects
        characters.map((user,i)=>
        {
        return (<Card  key={user.id} 
        //each map card
        //should have a unique key
        id={user.id}
        name={user.name}
        clan={user.Clan} 
        email={user.email}/>);
    })
}
    </div>
    );
}

export default cardList;

