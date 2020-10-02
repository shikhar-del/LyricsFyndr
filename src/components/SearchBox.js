import React,{ Component } from 'react';

class SearchBox extends Component{

    state = {
        term : ""
    }

    handleChange = (e)=>{
        this.setState({term:e.target.value});
    }
    
    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render(){
        return <div className="ui inverted segment" style={{"marginTop":"10px"}} >
            <form onSubmit = {this.onFormSubmit}>
                <div className="ui inverted form">
                    <div className="field">
                        <label><h3>Type the lyrics</h3></label>
                        <input type='text' value={this.state.term} onChange={this.handleChange} ></input>
                    </div>
                    <button type="submit" className="ui submit button">Submit</button>
                </div>
            </form>
        </div>
    }
}

export default SearchBox;