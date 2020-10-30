import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './screens/Homepage';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route to="/" exact>
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
