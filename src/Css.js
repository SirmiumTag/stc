import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Css extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://www.youtube.com/watch?v=qKoajPPWpmo',
        'https://www.youtube.com/watch?v=UO0ZPL8yMpU',
        'https://www.youtube.com/watch?v=JT0gyzbpD2U',
        'https://www.youtube.com/watch?v=hCoMjvtsyPA',
        'https://www.youtube.com/watch?v=Bj2ZCfDPP2A',
        'https://www.youtube.com/watch?v=u4dLB9NP3IA',
        'https://www.youtube.com/watch?v=KULYFC545qY',
        'https://www.youtube.com/watch?v=bWDtPnNkutw',
        'https://www.youtube.com/watch?v=DFgXjen2JS0',
        'https://www.youtube.com/watch?v=QT_lIti-8Zk',
        'https://www.youtube.com/watch?v=kp9CWRRLjAM',
        'https://www.youtube.com/watch?v=XtgrFq5_QQM',

      ]
      this.title = [
        '1: Introduction to CSS',
        '2: Changing font type, color, and size',
        '3: Multiple selectors and writing rule for more than one element',
        '4: Add a line to header and border property',
        '5: Inheritance and overriding',
        '6: Using Classes in CSS',
        '7: More on Classes in CSS',
        '8: Font Family',
        '9: The Font Weight Property',
        '10: Using an external style sheet',
        '11: Text-decoration property',
        '12: Italic fonts',

      ]
      this.state = {
        currentIndex: 0,
      }
  
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
  
    }
    goToPrevSlide () {
      const {currentIndex} = this.state;
      const newPointer = currentIndex === 0 ? this.videos.length -1 : currentIndex - 1;
      this.setState({currentIndex: newPointer});
      const newPointerrr = currentIndex === 0 ? this.title.length -1 : currentIndex - 1;
      this.setState({currentIndex: newPointerrr});
    }
    
    
    goToNextSlide ()  {
      const {currentIndex} = this.state;
      const newPointer = currentIndex === this.videos.length - 1  ? 0 : currentIndex + 1;
      this.setState({currentIndex: newPointer});
      const newPointerr = currentIndex === this.title.length - 1  ? 0 : currentIndex + 1;
      this.setState({currentIndex: newPointerr});
    }
  
    
    render(){
      return(
        <div className="home">
        <div className="video">
        <h2 className="naslov">{this.title[this.state.currentIndex]}</h2>
        <div className="player">
        <div></div>
        <ReactPlayer width='100%'
         url={this.videos[this.state.currentIndex]} controls={true}  />
        <div ></div>
        </div>
        <br/>
        <div className="Buttons">
        <button className="invisible"></button>
        <button  disabled={this.state.currentIndex === 0} class = "prev "  onClick={this.goToPrevSlide}>Previous lesson</button>
        <button disabled={this.state.currentIndex === 11} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
        <button className="invisible"></button>

        </div>
        </div>
        <div className="editor">
        <Iframe id="stajl" url="https://codesandbox.io/"
      width="100%"
      height="700px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
        </div>
        
        
        
        <br/>
        

      </div>
  
  
      );
  }
  
  }
 
export default Css;