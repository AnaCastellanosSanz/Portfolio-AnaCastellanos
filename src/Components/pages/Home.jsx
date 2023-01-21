import React from 'react'
import './Home.scss'
import angular from "../assets/icons/angular.png"
import css from "../assets/icons//css.png"
import html from "../assets/icons//html.png"
import js from "../assets/icons//js.png"
import mongo from "../assets/icons//mongo.png"
import node from "../assets/icons//node.png"
import react from "../assets/icons//react.png"
import sass from "../assets/icons//sass.png"

const Home = () => {
  return (
    <section className='todoHome'>
    <div className='texto'>
    <div className='titleName'>
    <h1>Ana Castellanos Sanz</h1>
    </div>
    <h2>Full Stack Developer Jr</h2>
    <div className='paragraph'>
            <div className="iconos">
            <img src={html} alt=""/>
            <img src={css} alt=""/>
            <img src={sass} alt=""/>
            <img src={js} alt=""/>
            <img src={node} alt=""/>
            <img src={mongo} alt=""/>
            <img src={react} alt=""/>
            <img src={angular} alt=""/>
            </div>
      </div>
    </div>
    </section>
  )
}

export default Home;