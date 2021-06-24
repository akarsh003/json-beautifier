import React, { Component, createRef } from 'react'
import JsonParser from './JsonParser'
import './Form.css'
import Error from './Error';


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            indentationValue: 5, //Default is 5.
            isJson: false,
            jsonParsed: {},
            displayError: false,
            jsonRef: createRef()
        };

        this.indentOptions = [...Array(10).keys()].map(value => <option value={value}>{value}</option>)  //[0, 1 ,2,3,4,5,6,7,8,9]
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateJson = this.validateJson.bind(this);

    }

    componentDidUpdate() {
        // console.log("this.state.json", Object.keys(this.state.jsonParsed), this.state.isJson)
        if (Object.keys(this.state.jsonParsed).length > 0 && this.state.isJson === true) {
            //console.log("entered")
            setTimeout(() => {
                const finalJson = document.getElementById('finalJson')
                if (finalJson) {
                    finalJson.scrollIntoView(true)
                    finalJson.select();
                    finalJson.setSelectionRange(0, 99999);
                    document.execCommand('copy')
                }
            }, 100)
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        this.validateJson()
        event.preventDefault();
    }

    validateJson(event) {
        try {
            var parsedJson = JSON.parse(this.state.value)
            this.setState({ jsonParsed: parsedJson })
            this.setState({ isJson: true })
            this.setState({ displayError: false });
        } catch (exception) {
            //console.log("Not a valid json")
            this.setState({ displayError: true });
        }
    }

    render() {
        return (
            <div>
                <form className="form">
                    <label className="form-label">
                        <div>
                            Text area
                        </div>
                    </label>
                    <textarea className="textarea" placeholder="Paste your text here..." value={this.state.value} name="value" onChange={this.handleChange} rows="8" cols="100" />
                    <div className="submitValues"><span>Indentation level:</span>
                        <select className="form-select" value={this.state.indentationValue} name="indentationValue" onChange={this.handleChange}>
                            {this.indentOptions}
                        </select>
                        <button className='button' type="button" /*class="button"*/ value="Info" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    {this.state.displayError ? <Error /> : (this.state.isJson ? <JsonParser json={this.state.jsonParsed} id={parseInt(this.state.indentationValue)} /> : null)}
                </form>
            </div>
        )
    }
}
