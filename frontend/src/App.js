import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from "./components/login/Login";
import OAuth2RedirectHandler from './components/OAuth2RedirectHandler'
import mainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Login}/>
                <Route path="/profile" component={mainPage}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>

            </Switch>
        </Router>



    </div>
  );
}

export default App;
