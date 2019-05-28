import React,{Component} from 'react';
import Pokedex from './Pokedex';



class Pokegame extends Component {
    
    static defaultProps ={

        pokemon:[
            {id:6, name:"Charizard", type:'fire/flying',exp:332},
            {id:9, name:"Blastoise", type:'water', exp: 332},
            {id:3, name:"Venasuar", type:'grass/poison', exp:332},
            {id:25,name:"Pikachu",type:'electric', exp:300},
            {id:143, name:"Snorlax",type:'normal', exp:350},
            {id:18,name:"Pigeot",type:"normal/flying",exp:250},
            {id:130, name:"Gyarados",type:"water/flying",exp:300},
            {id:149, name:"Dragonite", type:"dragon/flying", exp:370}

        ]


        }


    render(){

    let hand1 = [];


    
    let hand2 = [...this.props.pokemon];


    while(hand1.length < hand2.length){

        let randPick = Math.floor(Math.random()*hand2.length);

        let randPokemon = hand2.splice(randPick,1)[0];

        hand1.push(randPokemon);
    }
     console.log(hand1);
     console.log(hand2);

     return( 
         <div>
             Pokemon teams
             <Pokedex pokemon={hand1} />
             <Pokedex pokemon={hand2} />
         </div>
     )
    }
}


export default Pokegame;