import React,{useState} from 'react';
// import {images} from "./Data/images";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';

export default function BannerSlider(){

    const [current,setcurrent]=useState(0);
    const length=images.length;
    const nextSlide=()=>{
        setcurrent(current===length-1?0:current+1);
    }
    const prevSlide=()=>{
        setcurrent(current===0?length-1:current-1);
    }
    console.log(current);
   return(
     <div className="section">
        <FaArrowAltCircleLeft className="arrow-left" onClick={()=>{prevSlide()}}/>
        <FaArrowAltCircleRight className="arrow-right" onClick={()=>{nextSlide()}}/>
        {images.map((slide,index)=>{
             return <div key={index} className={index===current?'slideactive':'slideinactive'} on>
                {current===index && <a href="/"><img alt="slide image" src={slide.image} className="slide"/>
                </a>}
                </div> 
        })}
     </div>
   )

}
export  const images = [
    {image:"https://images.unsplash.com/photo-1662729429569-ad4b1300512e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"},
    {image:"https://images.unsplash.com/photo-1662497299514-898124f20365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
    {image:"https://images.unsplash.com/photo-1662733853591-74ed4c989cde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
    {image:"https://images.unsplash.com/photo-1662730344749-0c6a154e58e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}];