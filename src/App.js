import './App.scss';
import { Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import OptionPage from './pages/OptionPage/OptionPage'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {
  return (
    <div className="App">

      <div>
        <Route exact path='/'  render={() => (
          <Home />
        )} />

        <Route path='/option/:id' render={(props) => (
          <OptionPage
            props={props}
          />
        )}/>
        
        <Route path='/portfolio/:id' render={(props) => (
            <Portfolio
              props={props}
            />
        )}/>
      </div>
    </div>
  );
}

export default App;
