import React, { useRef } from 'react';
import {useState,useEffect} from 'react';
import './Slider.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.webp';
import img4 from './images/img4.webp';
import img5 from './images/img5.webp';
import img6 from './images/img6.jpg';

function  Slider(){

    const data=[img1,img2,img3,img4,img5,img6];

    const[next,setNext] = useState(0);

    let ref = useRef(null);
    const handleNext=()=>{
        setNext((previousVal)=>{
            if(previousVal == data.length-1)
                return 0;
            else
                return previousVal+1;
  })
       
       
    }
    const handlePrev = ()=>{
        if(next ==0)
            {
                setNext(data.length -1);
            }
        else{
            setNext(next-1);
        }
    }
    
    useEffect(()=>{
        ref.current = setInterval(handleNext,1500);
        return(()=>{
            clearInterval(ref.current)
        })
    },[]);

    return(
        <>
        <div className="container" onMouseEnter={()=>{clearInterval(ref.current)}}  onMouseLeave={()=>ref.current=setInterval(handleNext,1500)}>
            <div className="left-btn" >
                <button   className="slider-btn" onClick={handlePrev}>{"<"}</button>
            </div>
            <img className="slider-img" src={data[next]} alt="image"/>
            <div className="right-btn">
            <button  className="slider-btn"onClick={handleNext}>{">"}</button>
            </div >
        </div>
        </>
    )

}
export default Slider;
