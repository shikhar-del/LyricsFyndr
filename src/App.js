import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import ResultsBox from './components/ResultsBox';
import axios from 'axios';

class App extends Component {

  state = {
    term:"",
    tracks:[]
  }
  componentDidMount(){
    this.searchLyrics('asb')
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1
              &apikey=${process.env.REACT_APP_MM}`)
          .then(
            res=>{
              this.setState({tracks:res.data.message.body.track_list})
            }
          ).catch(
            err=>{
              console.log(err)
            }
          )          
  }

  searchLyrics = (term)=>{
    this.setState({term})
  }

  render(){
    return <div className="ui container">
       <SearchBox onSubmit={this.searchLyrics} />
       <ResultsBox tracks={this.state.tracks}/>
    </div>;
  }
}

export default App;
