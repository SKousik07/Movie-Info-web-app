import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Details extends Component{
 
  constructor(props){
    super(props)
    this.state={
      movie:[],
      isLoading: false,
    }
  }
   
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`http://www.omdbapi.com/?t=${this.props.title}&apikey=f7bf7be6`)
      .then(response => response.json())
      .then(data =>{console.log(data);{this.setState({movie: data, isLoading: false })}});

    
  }

  
  render() {

    const { movie, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    else{
    return (
        <div className="container">
         <h1>Movie Details</h1>
          <h2>{movie.Title}</h2>
      <Table striped bordered hover dark>
      <tbody>
        <tr>
          <th scope="row">Title</th>
          <td>{movie.Title}</td>  
         </tr>
         <tr>
          <th scope="row">Poster</th>
          <td><img src={movie.Poster}></img></td>  
         </tr>
        <tr>
          <th scope="row">Released</th>
          <td>{movie.Released}</td>  
        </tr>
        <tr>
          <th scope="row">Country</th>
          <td>{movie.Country}</td>  
        </tr>
        <tr>
          <th scope="row">Language</th>
          <td>{movie.Language}</td>  
        </tr>
        <tr>
          <th scope="row">Genre</th>
          <td>{movie.Genre}</td>  
        </tr>
        <tr>
          <th scope="row">Director</th>
          <td>{movie.Director}</td>  
        </tr>
        <tr>
          <th scope="row">Actors</th>
          <td>{movie.Actors}</td>  
        </tr>
        <tr>
          <th scope="row">IMDB rating</th>
          <td>{movie.imdbRating}/10</td>  
        </tr>
        <tr>
          <th scope="row">IMDB Votes</th>
          <td>{movie.imdbVotes}</td>  
        </tr>
        <tr>
          <th scope="row">Run Time</th>
          <td>{movie.Runtime}</td>  
        </tr>
        <tr>
          <th scope="row">Plot</th>
          <td>{movie.Plot}</td>  
        </tr>

        
       
      </tbody>
    </Table>
  
          
    </div>
    );
    }
}
}
export default Details;
