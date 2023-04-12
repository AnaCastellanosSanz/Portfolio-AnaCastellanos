import React from 'react'
import './Coding.scss'
import tradizionale from "../assets/portfolio/tradizionale.png"
import sushi from "../assets/portfolio/sushi.jpg"
import ANHQV from "../assets/portfolio/ANHQV.png"
import pokedex from "../assets/portfolio/pokedex.png"
import rickymorty from "../assets/portfolio/RickyMorty.png"
import github from "../assets/git.png"
import dino from "../assets/portfolio/dinoGoogle.png"

const Coding = () => {
  return (
    <div className='codingGallery'>
    <div className='codingCards'>


    <div className='cardsC'>
    <a href="https://la-tradizionale-r55dwzjxa-joseluisrodriguez-bootcamp.vercel.app/home"><img className="photoRyM" src={tradizionale} alt=""/></a>
    <h2><a href='https://la-tradizionale-r55dwzjxa-joseluisrodriguez-bootcamp.vercel.app/home'>La Tradizionale - Angular </a></h2>
    <h3>Created with TypeScript, JavaScript, HTML and SCSS, Node JS and Mongo DB.</h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/ProyectoFinal-Pizzeria"><img src={github
        } alt=""/></a>
    </div>
    </div>

    <div className='cardsC'>
    <a href="https://anhqv-angular.vercel.app/home"><img className="photoRyM" src={ANHQV} alt=""/></a>
    <h2><a href='https://anhqv-angular.vercel.app/home'>Aquí no hay quien viva - Angular</a></h2>
    <h3>Created with TypeScript, JavaScript, HTML and SCSS.</h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/ANHQV-Angular"><img src={github
        } alt=""/></a>
    </div>
    </div>

    <div className='cardsC'>
    <a href="https://poyecto-rick-and-morty-react.vercel.app/"><img className="photoRyM" src={rickymorty} alt=""/></a>
    <h2><a href='https://poyecto-rick-and-morty-react.vercel.app/'>Rick and Morty APP </a></h2>
    <h3>Created with Authorization, React, JavaScript and CSS.</h3>
    <h3>From <a href="https://rickandmortyapi.com/">Rick and Morty Api</a></h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/Poyecto-Rick-and-Morty-React"><img src={github} alt=""/></a>
    </div>
    </div>
    

    <div className='cardsC'>
    <a href="https://proyecto-pokedex.vercel.app/"><img className="photoRyM" src={pokedex} alt=""/></a>
    <h2><a href='https://proyecto-pokedex.vercel.app/'>PokeAPI</a></h2>
    <h3>Created with JavaScript, HTML and CSS.</h3>
    <h3>From <a href="https://pokeapi.co/">PokeApi</a></h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/Proyecto-Pokedex"><img src={github
        } alt=""/></a>
    </div>
    </div>

    <div className='cardsC'>
    <a href="https://dino-game-ashy.vercel.app/"><img className="photoRyM" src={dino} alt=""/></a>
    <h2><a href='https://dino-game-ashy.vercel.app/'>Dino Game</a></h2>
    <h3>Created with JavaScript, HTML and CSS.</h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/Dino-Game"><img src={github
        } alt=""/></a>
    </div>
    </div>

    <div className='cardsC'>
    <img className="photoRyM" src={sushi} alt=""/>
    <h2>Resturant Sushi - Symfony</h2>
    <h3>Created with PHP, Twig, Shell, CSS.</h3>
    <div className='textoCoding'>
        <a href="https://github.com/AnaCastellanosSanz/SushiPHP"><img src={github
        } alt=""/></a>
    </div>
    </div>


    </div>
    </div>
  )
}

export default Coding