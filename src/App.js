import './App.css';
import MyComponentTest from './test';
import Cheat from './cheat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <th> example 1 </th>
            <th> example 2 </th>
          </tr>
          <tr>
            <td> example 1</td>
            <td> example 2</td>
          </tr>
        </table>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          Learn React
          <MyComponentTest/>
          <Cheat/>
        
      </header>
    </div>
  );
}

export default App;
