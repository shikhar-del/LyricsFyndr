import Axios from 'axios';
import React, { Component } from 'react';

class TrackList extends Component{

    state = {lyrics:""}
    componentDidMount(){
        Axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.track.track_id}
        &apikey=${process.env.REACT_APP_MM}`)
        .then(res=>{
            this.setState({lyrics:res.data.message.body.lyrics.lyrics_body})
        })
    }
    render(){
        const colors = ["red","orange","yellow","olive","green"
                        ,"violet","blue","teal"];
        const {track_name,artist_name,album_name,track_share_url} = this.props.track;
        return <div className="card">
                    <div className="content">
                        <div className="header">
                            {track_name}
                        </div>
                        <div className="meta" style={{color:"black"}}>
                            {artist_name}
                        </div>
                        <div className="meta">
                            {album_name}
                        </div>
                        <div className="description">
                            {this.state.lyrics}
                        </div>
                    </div>
                    <a target="blank" href={track_share_url} className={"ui "+ colors[Math.floor(Math.random()*8)] + " bottom atached button"}>
                        <i className="angle double right icon"></i>
                    </a>
                </div>
    }
}

export default TrackList;