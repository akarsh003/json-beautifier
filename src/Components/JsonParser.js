import React from 'react'
import JSONPretty from 'react-json-pretty';
import './Form.css'
// import ReactJson from 'react-json-view';


// getJsonOutput:function(){
//     return this.state.data.map(function(data) {
//                            return JSON.stringify(data.email)
//                        }).join('\n');

// const JsonParser = ({json,id}) => {
//     return (
//         <div>
//             <form class="result-form">
//                 <textarea value={getJsonOutput()>
//              <textarea value={<pre> 
//                     { JSON.stringify( json, null, id ) }
//                 </pre>}>
                
//             </textarea>
//             </form>
//         </div>
//     )
// }
const JsonParser = React.memo(({json,id}) => (
    <div>
        {/* <JSONPretty className='prettyJson' id="json-pretty" data={json} space={indent}></JSONPretty> */}
        <form className="prettyJson">
            <pre>{JSON.stringify(json, null, id) }</pre>
        </form>
        {/* <ReactJson src={json} theme="monokai" /> */}

    </div>));
export default JsonParser
