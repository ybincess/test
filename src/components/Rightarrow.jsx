import React, { Component } from 'react';
const Rightarrow = (props) => {
        return ( 

            <div className="backArrow" onClick={props.goToPrevSlide}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
            
            </div>

         );
    }

 
export default Rightarrow;