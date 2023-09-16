import React from "react";

const scroll =(props)=>{
    //every component have children
    //which are inner components
    return (
        <div style={{overflowY:'scroll' , border:'1px solid black' ,height:'800px'}}>
            {props.children}
        </div>
    );
}

export default scroll;