import React,{ Component } from 'react';
import TrackList from './TrackList';

class ResultBox extends Component{
    render(){
        const tracks = this.props.tracks.map(
            (track,index) =>{
                return <TrackList key={index} track={track.track} al_id={track.track.album_id}/>
            }
        )

        return <div className="ui three cards">
            {tracks}
        </div>
    }
}

export default ResultBox;