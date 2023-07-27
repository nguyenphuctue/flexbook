import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/login';
import Feed from './components/feed';
import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Feed}/>
      </Switch>
    </>
  )
}

export default App
