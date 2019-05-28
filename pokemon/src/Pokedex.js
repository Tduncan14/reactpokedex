import React, {Component} from 'react';
import PokeCard from './PokeCard';


class Pokedex extends Component {



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
       

        return( 
            <div className="Pokedex">
                <h1>Pokedex</h1>
                {
                this.props.pokemon.map(p =>(
                <PokeCard  id={p.id} name={p.name} type={p.type} exp={p.exp} />
                ))
                }
            </div>
        )
    }
}


export default  Pokedex