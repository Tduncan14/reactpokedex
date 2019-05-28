import React,{Component} from 'react';
import './Pokecart.css'

let POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
//const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class PokeCard extends Component {




    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`


     return(
         <div className="Pokecard"> 
         <h1>{this.props.name}</h1>
         <img src={imgSrc} />
         <div>Type: {this.props.type}</div>
         <div>EXP: {this.props.exp}</div>
         </div>
     )
    }
}


export default PokeCard;