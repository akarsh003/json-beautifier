import React from 'react'
import '../App.css';


const jsonStr={name: 'John Doe', age: 20, admin: true, member: null, permissions: ['read', 'write', 'edit']}
const str='String'
const Header = (props) => {
    return (
        <div className='App-header'>
            <h1 className="header"> JSON BEAUTIFIER</h1>
            <p class="header-desc"> A react platform to format and validate JSON text</p>
        </div>
    )
}

// Header.defaultProps={
//     title:'Here u can beautify JSON',
// }

// Header.propTypes={
//     title:PropTypes.string,
// }
export default Header
