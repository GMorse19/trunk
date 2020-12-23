import './App.scss';
import { Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import OptionPage from './pages/OptionPage/OptionPage'
import Portfolio from './pages/Portfolio/Portfolio'
import SignIn from './pages/SignIn/SignIn'

function App() {
  return (
    <div className="App">

      <div>
        <Route exact path='/home'  render={() => (
          <Home />
        )} />

        <Route exact path='/'  render={() => (
          <SignIn />
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
