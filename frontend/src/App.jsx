import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/login';
import Feed from './components/feed';
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

function App() {

  const history = useHistory();
  const location = useLocation();

  if (sessionStorage.getItem("isAuthenticated") === null) {
    sessionStorage.setItem("isAuthenticated", "false");
  }

  let isAuthenticated = sessionStorage.getItem("isAuthenticated");

  if (isAuthenticated === "false" && location.pathname != "/login") {
    history.push("/login");
  }

  if (isAuthenticated === "true" && location.pathname == "/") {
    history.push("/");
  }

  return (
    <>
      <Switch>
        <Route path="/login" >
          <Login></Login>
        </Route>
        {isAuthenticated ? (
          <>
            <Route path="/" >
              <Feed></Feed>
            </Route>
          </>
        ) : (
          ""
        )}

      </Switch>
    </>
  )
}

export default App
