import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from "./components/login/Login";
import OAuth2RedirectHandler from './components/OAuth2RedirectHandler'
import mainPage from "./components/mainPage/MainPage";
import Register from "./components/register/Register";
import '../src/components/alert/alert.css'
import FarmPage from "./pages/farmPage/FarmPage";
import FarmIncomePage from "./pages/farmPage/farmPageIncome/FarmIncomePage";
import FarmSettingsPage from "./pages/farmPage/farnPageSettings/FarmSettingsPage";
import FarmCostPAge from "./pages/farmPage/farmPageCost/FarmCostPage";
import MainPage from "./pages/mainPage/MainPage";
import FarmOrderPage from "./pages/farmPage/farmPageOrder/FarmOrderPage";
import FarmALLOrderPage from "./pages/farmPage/farmPageOrder/FarmAllOrderPage";
import PatchList from "./pages/mainPage/PatchList";

function App() {
  return (
    <div className="App">
        <div id={"response-container"}>
        </div>
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/patch-list" component={PatchList} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Register}/>
                <Route exact path="/profile" component={mainPage}/>
                <Route exact path="/farm" component={FarmPage}/>
                <Route exact path="/farm/incomes" component={FarmIncomePage}/>
                <Route exact path="/farm/costs" component={FarmCostPAge}/>
                <Route exact path="/farm/settings" component={FarmSettingsPage}/>
                <Route exact path="/farm/orders" component={FarmOrderPage}/>
                <Route exact path="/farm/all-order" component={FarmALLOrderPage}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
            </Switch>
        </Router>



    </div>
  );
}

export default App;
