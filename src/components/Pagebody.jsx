import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import Slide from './components/Slide';
//import Leftarrow from './components/Leftarrow';
//import Rightarrow from './components/Rightarrow';

class Pagebody extends Component {

    constructor(props){
    super(props);
    this.state={
        images: [
            "../images/pic.jpg",
            "../images/pic1.jpg",
            "../images/pic2.jpg"        

        ],
        currentIndex: 0

        
    }
}
goToPrevSlide(){
this.setState(NextState => ({
    currentIndex: NextState -1
}));
}
goToNextSlide(){
this.setState(PrevState => ({
    currentIndex: PrevState +1
}));
}

render() { 
        return(
            <div className="slide">
            {
                this.state.images.map((image, i) =>(
                <Slide key={i} image={image}/>
            ))
            }
            <Leftarrow goToPrevSlide={this.goToPrevSlide}/>
            <Rightarrow goToNextSlide={this.goToNextSlide}/>


 
 </div>
            );
    }
}
 
export default Pagebody;
const Leftarrow = (props) => {
       return ( 
            <div className="nextArrow" onClick={props.goToNextSlide}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
            
            </div>
         );
    }

const Rightarrow = (props) => {
        return ( 
            <div className="backArrow" onClick={props.goToPrevSlide}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
            
            </div>

         );
    }
const Slide = ({image}) => {
    return(
        <div className="slide">
        </div>
    )
}

 