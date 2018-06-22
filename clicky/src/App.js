import React, { Component } from 'react';
import Header from "./components/Header"
import ImageCard from "./components/ImageCard"
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import images from "./imageInfo.json"

class App extends Component {
  state = {
    images,
    count: 0,
    score: 0
  };
 
//  clicker = (id, clicked) => {
//    if (clicked){
//      console.log("changed to true");
//      this.state.images.forEach((img, i) => {
//       this.state.images[i].clicked = false;
//      });
//      return this.setState({
//        image: this.state.images.sort(() => Math.random()- 0.5),
//        score: this.state.count,
//        count: 0
//      })
//    } else {
//      console.log("this is still false");
//      this.state.images.forEach((img, i) => {
//       if (id === img.id){
//         this.state.images[i].clicked = true;
//       }
//      });
//      return this.setState({image: this.state.images.sort(() => Math.random()- 0.5), count: this.state.count + 1})
//    }
//  }
  render(){
    return (  
      <Wrapper>
        <Header 
          count={this.state.count}
          score={this.state.score}
        />
        {
          images.map(image => (
            <ImageCard key={image.id}{...image}
            clicker={(id, clicked)=>{
              if(clicked){
                this.state.images.forEach((image, i) => {
                  this.state.images[i].clicked = false;
                });
                return this.setState({
                  image: this.state.images.sort(() => Math.random()- 0.5),
                  score: this.state.count,
                  count: 0
                })
              } else {
                this.state.images.forEach((image, i) => {
                  if (id === image.id){
                    this.state.images[i].clicked = true;
                  }
                });
                return this.setState({image: this.state.images.sort(() => Math.random()- 0.5), count: this.state.count + 1})
              }
            }}
            />
          ))
        }
        <Footer />      
      </Wrapper>
    )
  }
}



export default App;
