import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Wheel from './components/wheel';
import './styles.css';

export function App () {
   const [yacine, setYacine] = useState(false)
  
  const names = ['Clemens', 'Stavros', 'Utsavi', 'Robert', 'Said', 'Carole', 'Arno', 'Said', 'Aryan', 'Dipali', 'Ömer', 'Brian', 'Joey', 'Jasmin', 'Safi', 'Matthias'];
   
    return (
      <div className="App">
        <h1>Yacine's Wheel of Doom</h1>
        <button>Add Yacine</button>
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