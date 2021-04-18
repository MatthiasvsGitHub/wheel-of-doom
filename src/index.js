import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Wheel from './components/wheel';
import './styles.css';

export function App () {
  const [state, setState] = useState(true)
  
  const names = ['Clemens', 'Stavros', 'Utsavi', 'Robert', 'Said', 'Carole', 'Arno', 'Said', 'Aryan', 'Dipali', 'Ömer', 'Brian', 'Joey', 'Jasmin', 'Safi', 'Matthias'];
   
  const addRemove = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      if (names.includes(event.target.value)) {
        for( let i = 0; i < names.length; i++){                         
          if (names[i] === event.target.value) { 
              names.splice(i, 1); 
              i--;
              alert(`${event.target.value} has been removed!`)
              event.currentTarget.value = "";
              setState(true)
          }
      }
      }
      else {
        names.unshift(event.target.value)
        alert(`${event.target.value} has been added!`)
        event.currentTarget.value = "";
        setState(true)
      }
    }
    
  }
    return (
      <div className="App">
        <h1>Yacine's Wheel of Doom</h1>
        <input type="text"  size="20" placeholder="Add or Remove a Name" onKeyUp={addRemove}/>
        <Wheel items={names} />
      </div>
    );
  
}
/* export class App extends React.Component {
  constructor() {
    super();
    this.places = ['Clemens', 'Stavros', 'Utsavi', 'Robert', 'Said', 'Carole', 'Arno', 'Said', 'Aryan', 'Dipali', 'Ömer', 'Brian', 'Joey', 'Jasmin', 'Safi', 'Matthias'];
  }

  render() {
    return (
      <div className="App">
        <h1>Yacine's Wheel of Doom</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
} */

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);