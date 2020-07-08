import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';

import Details from './DetailsComponent';


class Main extends Component{
    
    constructor(props){
         super(props);
         this.state={
            data:null,
            title:''
       }
      
    }

    render(){
        
        const DetailId = ({match}) => {
            return(
                <Details title={match.params.title} />
            );
          };


        return(
            <div className="App">
            <Header/>
            <Switch>
              <Route exact path='/home' component={() => <Home  handleTitle = {this.handleTitle} title={this.state.title} 
               handleData={this.handleData}/>} />
              <Route  path='/home/:title' component={DetailId} />
              <Redirect to="/home" />
              </Switch>
              <Footer/>
            </div>   
        );
    }

}

export default Main;