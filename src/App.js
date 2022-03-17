import ProductData from './ProductData';
import AmazonHeader from './AmazonHeader';
import WatchTile from './WatchTile';
import FeatureButton from './FeatureButton';
import Product from './Product';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    ProductData: ProductData,
    watchSelected: 0,
    featureSelected: 0
  }
  
  // let blogCards = this.state.blogObjArr.map((item, index)=>{
  //   return(
  //     <BlogCard key={item.id}
  //               title={item.title}
  //               description={item.description}
  //               likeCount={item.likeCount}
  //               onLikeBtnClick={() => this.onLikeBtnClick(index)}
  //               />
  //   )
  // })
  
  onWatchClick= (pos) =>{
    this.setState(() =>{
      return{watchSelected: pos}
    });
  }
  onFeatureClick = (pos) =>{
    this.setState(() => {
      return({featureSelected: pos})
    })
  }
  
  
  
  
  
  
  render(){
    let WatchTiles = this.state.ProductData.colorOptions.map((item, pos) =>{
      return(
        <WatchTile key={pos}
                   pos={pos}
                   img={item.imageUrl}
                   alt={item.styleName}
                   watchSelected={this.state.watchSelected}
                   onWatchClick={()=>this.onWatchClick(pos)}></WatchTile>
      )
    })

    let FeatureButtons = this.state.ProductData.featureList.map((item, pos) =>{
      return(
        <FeatureButton key={pos}
                   pos={pos}
                   name={item}
                   featureSelected = {this.state.featureSelected}
                   onFeatureClick = {() => this.onFeatureClick(pos)}
                   ></FeatureButton>
      )
    })

    let watchImg = this.state.ProductData.colorOptions[this.state.watchSelected].imageUrl;
    let featureNSelected = this.state.ProductData.featureList[this.state.featureSelected];

    return (
      <div className="App">
        <AmazonHeader></AmazonHeader>
          <div className="Main">
            <section className='Left'>
              <Product img={watchImg} featureNameSelected={featureNSelected}></Product>
            </section>
            <section className='Right'>
              <div>
                <h1>{this.state.ProductData.title}</h1>
                <p>{this.state.ProductData.description}</p>
              </div>
              <div className='watchTiles'>
                <h3>Select Color</h3>
                  {WatchTiles}
              </div>
              <div>
                <h3>Features</h3>
                  {FeatureButtons}<br></br>
                  <button className='buy-btn'>Buy Now</button>
              </div>
            </section>
          </div>
      </div>
    );
  }
}

export default App;
