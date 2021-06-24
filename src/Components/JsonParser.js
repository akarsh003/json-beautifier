import React from 'react'
import './Form.css'

const JsonParser = React.memo(({ json, id }) => {
    return <div  id="finalJsonContainer" className="prettyJson">
                <textarea className="json" id="finalJson" col={50} row={50} value={JSON.stringify(json, null, id) } />
             </div>
    });
export default JsonParser
