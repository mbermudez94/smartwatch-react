import ProductData from './ProductData/ProductData';
import AmazonHeader from './AmazonHeader/AmazonHeader';
import Product from './Product/Product';
import ProductDetails from './ProductDetails/ProductDetails';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    ProductData: ProductData,
    watchSelected: 0,
    featureSelected: 0
  }
  
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
              <ProductDetails data={this.state.ProductData}
                              onWatchClick={this.onWatchClick}
                              watchSelected={this.state.watchSelected}
                              featureSelected = {this.state.featureSelected}
                              onFeatureClick = {this.onFeatureClick}></ProductDetails>
            </section>
          </div>
      </div>
    );
  }
}

export default App;
