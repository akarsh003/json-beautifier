import React, { useEffect, useRef, Component } from 'react'
import JsonParser from './JsonParser'
import './Form.css'
import Error from './Error';


export default class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            value:"Paste your text here..." ,
            indentationValue:5, //Default take as 5.
            parseJson:false,
            isJson:false,
            jsonParsed:{},
            displayError:false
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validateJson=this.validateJson.bind(this);
        this.getPrettyJson=this.getPrettyJson.bind(this);

    }

    handleChange(event) {    
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.setState(prevState => ({
            parseJson: !prevState.parseJson
          }));
        console.log('In handleSubmit: ' + this.state.parseJson)
        console.log(event.target.value)
        console.log(typeof(this.state.parseJson))
        this.validateJson()
        event.preventDefault();
    }

    validateJson(event){
        try{
            var parsedJson=JSON.parse(this.state.value)
            // this.setState(prevState => ({
            // isJson: !prevState.isJson
            //  }));
             this.setState({jsonParsed:parsedJson})
             this.setState({isJson:true})
             console.log(typeof(this.state.jsonParsed))
             this.scrollToBottom();

        }catch(exception){
            console.log("Not a valid json")
            this.setState({displayError:true});
        }
        this.setState(prevState => ({
            parseJson: !prevState.parseJson
          }));
        // this.setState({parseJson:false})
        // return
    }

    getPrettyJson(event){

        return JSON.stringify(this.state.parsedJson);
    }

    render() {
        return (
            <div>
                <form className="form">
                    <label className="form-label">
                        <b>&nbsp;&nbsp;Text area 1:</b><br/>
                        <textarea className="textarea" value={this.state.value} name="value" onChange={this.handleChange} rows="8" cols="100"/> 
                        <br/>
                        <b>&nbsp;&nbsp;Indentation level:</b>
                        <select className="form-select" value={this.state.indentationValue} name="indentationValue" onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>     
                    </label>
                    {/* &nbsp;&nbsp;&nbsp; */}
                    <button className='button' type="button" class ="button" value="Info" onClick={this.handleSubmit}>Submit</button>
                <br/>
                {this.state.displayError ? <Error/>:null}
                {this.state.isJson ? <JsonParser json={this.state.jsonParsed} id={parseInt(this.state.indentationValue)}/>:null}
                {/* {this.state.isJson ? <textarea className="display-area" defaultValue={<pre>JSON.stringify(this.state.parsedJson,null,5)</pre>} readOnly/>:null} */}
                </form>
          </div>
        )
    }
}
