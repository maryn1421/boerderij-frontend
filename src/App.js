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
import MarketPage from "./pages/marketPage/MarketPage";
import NewSale from "./pages/marketPage/marketNewSale/NewSale";
import MarketSingleSalePage from "./pages/marketPage/marketSingleSalePage/MarketSingleSalePage";
import {useState} from "react";
import {useCookies} from "react-cookie";



const PrivateRoute = ({ component, ...options }) => {

    const isLogged = (user) => {
        return user !== "no-user";
    }


    const [cookies, setCookies] = useCookies("user");
    let finalComponent;
    if (isLogged(cookies.user)) {
        finalComponent = component;
    }
    else {
        finalComponent = Login;
    }

    return <Route {...options} component={finalComponent} />;
};


const App = () => {
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
                <PrivateRoute exact path="/farm" component={FarmPage}/>
                <PrivateRoute exact path="/farm/incomes" component={FarmIncomePage}/>
                <PrivateRoute exact path="/farm/costs" component={FarmCostPAge}/>
                <PrivateRoute exact path="/farm/settings" component={FarmSettingsPage}/>
                <PrivateRoute exact path="/farm/orders" component={FarmOrderPage}/>
                <PrivateRoute exact path="/farm/all-order" component={FarmALLOrderPage}/>
                <Route exact path="/market" component={MarketPage}/>
                <Route exact path="/market/new" component={NewSale}/>
                <Route exact path="/market/sale/:id" component={MarketSingleSalePage}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
            </Switch>
        </Router>



    </div>
  );
}

export default App;
