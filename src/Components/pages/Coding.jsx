import React from 'react'
import './Coding.scss'
import pokedex from "../assets/portfolio/pokedex.png"
import rickymorty from "../assets/portfolio/RickyMorty.png"
import github from "../assets/git.png"
import dino from "../assets/portfolio/dinoGoogle.png"

const Coding = () => {
  return (
    <div className='codingGallery'>
    <div className='codingCards'>



    <div className='cardsC'>
   <img src={pokedex} alt=""/>
    <h2>PokeAPI</h2>
    <h3>Created with JavaScript, HTML and CSS.</h3>
    <h3>From <a href="https://pokeapi.co/">PokeApi</a></h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/Proyecto-Pokedex"><img src={github
        } alt=""/></a>
    </div>
    </div>

    <div className='cardsC'>
   <img src={dino} alt=""/>
    <h2>Dino Game</h2>
    <h3>Created with JavaScript, HTML and CSS.</h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/Proyecto-Pokedex"><img src={github
        } alt=""/></a>
    </div>
    </div>


    <div className='cardsC'>
   <img src={pokedex} alt=""/>
    <h2>PokeAPI</h2>
    <h3>Created with JavaScript, HTML and CSS.</h3>
    <h3>From <a href="https://pokeapi.co/">PokeApi</a></h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/Proyecto-Pokedex"><img src={github
        } alt=""/></a>
    </div>
    </div>



    <div className='cardsC'>
    <img className="photoRyM" src= {rickymorty} alt=""/>
    <h2>Rick and Morty API</h2>
    <h3>Created with Authorization, React, JavaScript and CSS</h3>
    <h3>From <a href="https://rickandmortyapi.com/">Rick and Morty App</a></h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/Poyecto-Rick-and-Morty-React"><img src={github} alt=""/></a>
    </div>
    </div>


    
    

    </div>
    </div>
  )
}

export default Coding