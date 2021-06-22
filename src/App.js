import './App.css';
import Header from './Components/Header.js'
import Form from './Components/Form.js'


function App() {
  return (
    <div className="beautifier">
      <Header title='JSON'/>
      <Form/>
      {/* <button className='button'>Submit</button> */}
    </div>
  );
}

export default App;
