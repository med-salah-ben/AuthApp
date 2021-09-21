import {Switch,Route} from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthUser } from "./JS/Actions.js/authActions";
import './App.css';
import AppNavBar from './Components/Route/AppNavBar';
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Pages/Dashboard";
import PrivateRoute from "./Components/Routes/PrivateRoute"

function App() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser())
  useEffect(()=>{
    getUser()
    // eslint-disable-next-line
  },[])
  return (
    <div >
    <AppNavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <PrivateRoute path="/dashboard" component={Dashboard} />

    </Switch>
    </div>
  );
}

export default App;
