import ReactPlayer from 'react-player';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AdSense from 'react-adsense';
import Iframe from 'react-iframe';




class Bootstrap extends React.Component {
  constructor(){
    super()
    this.videos = [
      'https://youtu.be/QAgrHLtG1Yk',
      'https://youtu.be/N77ZsKq4esI',
      'https://youtu.be/4G4aBvRB3B4',
      'https://youtu.be/E7R23erzuGg',
      'https://youtu.be/CGpWqSIjCbQ',
      'https://youtu.be/rvlvpX-rbgc',
      'https://youtu.be/9Lpxzhzjy9w',
      'https://youtu.be/WWKuaUtgNBI',
      'https://youtu.be/Izc-0yF4EA0',
      'https://youtu.be/YRLOf5V1eHo',
      'https://youtu.be/g3iipbujyDg',
      'https://youtu.be/AeCFqEz5Whs',
    ]
    this.title = [
      '1: Introduction',
      '2: Installing Bootstrap 4',
      '3: Bootstrap Reboot',
      '4: Containers',
      '5: Grid Basics',
      '6: Flex Grid',
      '7: Jumbotrons',
      '8: Utilities and Typography',
      '9: Cards',
      '10: Bootstrap Navs',
      '11: Responsive Navbars',
      '12: Tooltips',
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

export default Bootstrap;
