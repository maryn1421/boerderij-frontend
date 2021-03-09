import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from "./components/login/Login";
import OAuth2RedirectHandler from './components/OAuth2RedirectHandler'
import mainPage from "./components/mainPage/MainPage";
import Register from "./components/register/Register";
import '../src/components/alert/alert.css'
import FarmPage from "./pages/farmPage/FarmPage";
import FarmIncomePage from "./pages/farmPage/farmPageIncome/FarmIncomePage";

function App() {
  return (
    <div className="App">
        <div id={"response-container"}>
        </div>
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Register}/>
                <Route path="/profile" component={mainPage}/>
                <Route path="/farm" component={FarmPage}/>
                <Route path="/farm/income" component={FarmIncomePage}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
            </Switch>
        </Router>



    </div>
  );
}

export default App;
