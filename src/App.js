import React from "react";
import CardList from './cardList';
import {chars} from './chars';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './scroll';

class App extends React.Component {
  
    constructor(){
        super()
        this.state={
            charst:chars,
            searchfield:''
        }
    }
    //order of executions

    //constructor()
    //render()
    //componentDidMount()


    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=>response.json())
    //     .then(users=>this.setState({robots:users}));
    // }

    onSearchChange=(event)=>{
        //whnever we create functions of our own,
        //use arrow functions
        this.setState({searchfield:event.target.value});
        //to change state
        
        // console.log(filterChars);
    }
    render(){
        const {charst,searchfield}=this.state;
        const filterChars=charst.filter((robot)=>{
            return robot.Clan.toLowerCase().includes(searchfield.toLowerCase()); 
        });

        if(!charst.length){
            return <h1>Loading...</h1>
            //if there's a delay 
            //it will show loading..
        }else{
        //this contains filtered robot objects
        //it is passed to pure func. cardlist
        //which renders on screen whatever is given to it
        //prev. we used to render entire array of robots
        //but now we are giving filtered array
        return(
            <div className="tc">
                <h1>Anime characters</h1>
                <SearchBox  searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList characters={filterChars}/>
            </Scroll>
            </div>
        );
        }
    }
    
}

export default App;

