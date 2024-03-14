import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-login">

        <div className="left-login">
            <h1 className="title-login">titulo</h1>
        </div>

        <div className="right-login">
          <div className="card-login">
          
            <div className="textfield">
              <label >nome</label>
              <input type='text' placeholder='nome'/>
            </div>
        
            <div className="textfield">
              <label >senha</label>
              <input type='password' placeholder='senha'/>
            </div>

          </div>
        </div>
        
    </div>
  );
}

export default App;