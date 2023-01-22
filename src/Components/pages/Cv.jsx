import React from "react";
import "./CV.scss";
import cv from "../assets/cvPhoto.png"
import pdf from "../CV/CV.pdf"
import download from "../CV/download.png"

const Cv = () => {
  return (
    <div className='cv'>
        <div className="divButton">
        <div>
        <img src={download} alt="" className="buttondownload"></img>
        </div>
        <button className="button">
        <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV-AnaInésCastellanosSanz" className="download"> 
         Download PDF
        </a>
        </button>
        </div>
        <img src={cv} alt="" className="cvImage"/>
    </div>
  );
};

export default Cv;
